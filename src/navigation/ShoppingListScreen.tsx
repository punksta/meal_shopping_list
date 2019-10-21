import {ScreenProps} from './index';
import {useQuery} from '@apollo/react-hooks';
import {MEAL_PLAN_INGREDIENTS, USER_MEALPLAN} from '../queries';
import ErrorComponent from '../components/ErrorComponent';
import React, {useState} from 'react';
import {Text, Animated, View, TouchableOpacity, StyleSheet} from 'react-native';
import ShoppingSettingsComponent, {
  ShoppingSettings,
} from '../components/ShoppingSettingsComponent';
import MealShopList from '../components/MealShopList';
import {buildShoppingSections} from '../data/IngredientUtils';
import ListFAB from '../components/ListFAB';
import AnimatedAppear from '../components/AnimatedAppear';

interface Props
  extends ScreenProps<any, {mealPlanId: string; mealPlanName: string}> {}

const ShoppingListScreen = (props: Props) => {
  const {mealPlanId} = props.navigation.state.params;

  const {refetch, loading, error, data} = useQuery(MEAL_PLAN_INGREDIENTS, {
    variables: {mealPlanId},
    fetchPolicy: 'no-cache',
  });

  if (error) {
    return <ErrorComponent error={error} onRetry={refetch} />;
  }

  const [settings, updateSettings] = useState({
    system: 'metric',
    servingCount: 3,
  } as ShoppingSettings);

  const [value] = React.useState(new Animated.Value(0));
  const [pendingValue, setPendingValue] = React.useState(0);

  const dataList = React.useMemo(
    () =>
      buildShoppingSections(
        data ? data.mealplan.shoppingList : [],
        settings,
        data ? data.ingredients : [],
      ),
    [data, settings],
  );

  return (
    <View style={{flex: 1}}>
      <MealShopList items={dataList} loading={loading} onRefresh={refetch} />
      <AnimatedAppear
        animatedValue={value}
        style={{
          backgroundColor: '#f9f9f9',
          borderColor: '#aeb3ae',
          borderTopWidth: StyleSheet.hairlineWidth,
          paddingVertical: 16,
          bottom: 0,
          position: 'absolute',
        }}>
        <ShoppingSettingsComponent
          initialSettings={settings}
          maxNumberOfPeople={8}
          onChange={data => updateSettings(data)}
        />
      </AnimatedAppear>
      <ListFAB
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          margin: 16,
        }}
        onPress={() => {
          const newPendingValue = pendingValue === 1 ? 0 : 1;
          setPendingValue(newPendingValue);
          Animated.spring(value, {
            toValue: newPendingValue,
            useNativeDriver: true,
          }).start();
        }}
      />
    </View>
  );
};

export default ShoppingListScreen;
