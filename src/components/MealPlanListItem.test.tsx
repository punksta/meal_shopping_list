import renderer from 'react-test-renderer';
import React from 'react';
import MealPlanListItem from './MealPlanListItem';

describe('MealPlanListItem', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <MealPlanListItem
          onPress={() => null}
          item={{
            id: '1',
            title: 'test',
            description: 'description',
            type: 'type',
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
