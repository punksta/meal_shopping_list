import {FlatList, Text} from 'react-native';
import React from 'react';
import {MealPLan} from '../data';
import MealPlanListItem from './MealPlanListItem';

interface Props {
  loading: boolean;
  items?: Array<MealPLan>;
  onRefresh: () => void;
  onItemPress: (item: MealPLan) => void;
}

const MealPlanList = (props: Props) => (
  <FlatList
    refreshing={props.loading}
    data={props.items || []}
    onRefresh={props.onRefresh}
    renderItem={({item}) => (
      <MealPlanListItem item={item} onPress={props.onItemPress} />
    )}
  />
);

export default MealPlanList;
