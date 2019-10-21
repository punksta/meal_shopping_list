import {
  SectionList,
  SectionListProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

interface Props {
  items: Array<{
    title: string;
    data: Array<string>;
  }>;

  onRefresh: () => void;
  loading: boolean;
}

const Item = ({title}: {title: string}) => (
  <Text style={styles.title}>{title}</Text>
);

const MealShopList = (props: Props) => {
  return (
    <SectionList
      onRefresh={props.onRefresh}
      refreshing={props.loading}
      sections={props.items}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item title={item} />}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
};

export default MealShopList;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 21,
  },
  title: {
    paddingStart: 16,
    marginVertical: 8,
    fontSize: 14,
  },
});
