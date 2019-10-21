import {buildShoppingSections} from './IngredientUtils';

describe('buildShoppingSections', () => {
  it('should return empty result on empty input', () => {
    // @ts-ignore
    expect(buildShoppingSections([], {})).toEqual([]);
  });

  it('should return empty array', () => {
    const shoppingSection = 'foobar';

    const system = 'metric';
    const servingSize = 1;

    const testFieldValue = 'test';

    expect(
      buildShoppingSections(
        [
          {
            id: testFieldValue,
            optional: false,
            shoppingSection,
            values: {
              us: [],
              [system]: [
                {
                  servingSize,
                  value: testFieldValue,
                  unit: testFieldValue,
                },
              ],
            },
          },
        ],
        {system, servingCount: servingSize},
        [
          {
            id: testFieldValue,
            titles: {
              singular: testFieldValue,
              plural: testFieldValue,
            },
          },
        ],
      ),
    ).toEqual([
      {
        title: shoppingSection,
        data: [`${testFieldValue}, ${testFieldValue} ${testFieldValue}`],
      },
    ]);
  });
});
