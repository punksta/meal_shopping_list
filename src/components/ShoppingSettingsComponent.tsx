import {ShoppingIngredient} from '../data';
import React, {useState} from 'react';
import {Button, Picker, Text, View, ViewProps} from 'react-native';
import PickerWithTitle from './PickerWithTitle';

export interface ShoppingSettings {
  system: keyof ShoppingIngredient['values'];
  servingCount: number;
}
interface Props extends ViewProps {
  initialSettings: ShoppingSettings;
  onChange: (settings: ShoppingSettings) => void;
  maxNumberOfPeople: number;
}

const systems: Array<keyof ShoppingIngredient['values']> = ['metric', 'us'];

const arrayOfLength = (length: number) =>
  Array.apply(null, Array(length)).map((x, i) => i + 1);

const ShoppingSettingsComponent = ({
  initialSettings,
  maxNumberOfPeople,
  onChange,
  ...rest
}: Props) => {
  const [{system, servingCount}, setState] = useState(initialSettings);

  const updateState = React.useMemo(() => {
    return (newPartState: any) => {
      setState(oldState => {
        const newState: ShoppingSettings = {
          ...oldState,
          ...newPartState,
        };
        onChange(newState);
        return newState;
      });
    };
  }, []);

  return (
    <View
      style={[
        {
          alignItems: 'flex-start',
          flexDirection: 'row',
          flexWrap: 'wrap',
          minHeight: 200,
        },
        rest,
      ]}>
      <PickerWithTitle
        style={{width: '50%'}}
        title={'System'}
        selectedValue={system}
        onValueChange={system => {
          updateState({system});
        }}>
        {systems.map(s => (
          <Picker.Item key={s} label={s} value={s} />
        ))}
      </PickerWithTitle>

      <PickerWithTitle
        style={{width: '50%'}}
        title={'Number of people'}
        selectedValue={servingCount}
        onValueChange={servingCount => {
          updateState({servingCount});
        }}>
        {arrayOfLength(maxNumberOfPeople).map(s => (
          <Picker.Item key={s} label={s.toString()} value={s} />
        ))}
      </PickerWithTitle>
    </View>
  );
};

export default ShoppingSettingsComponent;
