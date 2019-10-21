import {useQuery} from '@apollo/react-hooks';
import {USER_MEALPLAN} from '../queries';
import React from 'react';
import {View} from 'react-native';
import MealPlanList from '../components/MealPlanList';
import ErrorComponent from '../components/ErrorComponent';
import {MealPLan} from '../data';
import {ScreenProps, ScreensNames} from './index';

const MealPlansScreen = (props: ScreenProps) => {
  const {refetch, loading, error, data} = useQuery(USER_MEALPLAN);

  const refreshList = React.useMemo(
    () => () => {
      // force new request by passing "new" variables
      return refetch({time: Date.now()});
    },
    [refetch],
  );

  const onItemPress = React.useMemo(() => {
    return (item: MealPLan) =>
      props.navigation.navigate(ScreensNames.ShoppingListScreen, {
        mealPlanId: item.id,
        mealPlanName: item.title,
      });
  }, []);

  if (error) {
    return <ErrorComponent error={error} onRetry={refreshList} />;
  }

  return (
    <View style={{flex: 1}}>
      <MealPlanList
        onItemPress={onItemPress}
        items={data ? data.memberMealplans : null}
        loading={loading}
        onRefresh={refreshList}
      />
    </View>
  );
};

MealPlansScreen.navigationOptions = {
  title: 'Select Meal plan',
};

export default MealPlansScreen;
