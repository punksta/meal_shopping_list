import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import {MealPLan} from '../data';

interface Props {
  item: MealPLan;
  onPress: (item: MealPLan) => void;
  underlayColor?: string;
}

const defaultUnderlayColor = 'rgba(138,138,138,0.73)';

const MealPlanListItem = ({
  item,
  onPress,
  underlayColor = defaultUnderlayColor,
}: Props) => (
  <TouchableHighlight
    underlayColor={underlayColor}
    onPress={onPress.bind(null, item)}
    style={{
      paddingHorizontal: 16,
      paddingVertical: 16,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'rgba(138,138,138,0.73)',
    }}>
    <View>
      <Text
        numberOfLines={2}
        style={{
          fontSize: 21,
          marginBottom: 4,
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          color: 'gray',
          marginBottom: 8,
        }}>
        {item.id}
      </Text>
      <Text
        style={{
          fontSize: 14,
        }}
        numberOfLines={3}>
        {item.description}
      </Text>
    </View>
  </TouchableHighlight>
);

export default React.memo(MealPlanListItem, (p1, p2) => p1.item === p2.item);
