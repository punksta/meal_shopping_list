import {Picker, PickerProps, Platform, Text, View} from 'react-native';
import React, {ReactChildren, ReactNode} from 'react';

type Props = PickerProps & {
  title: string;
  children?: ReactNode;
};

const PickerWithTitle = ({title, style, ...pickerProps}: Props) => {
  return (
    <View style={[style]}>
      <Text
        style={{
          margin: 16,
          fontWeight: 'bold',
          fontSize: 16,
          alignSelf: 'center',
        }}>
        {title}
      </Text>
      <Picker
        {...pickerProps}
        {...Platform.select({
          android: {
            mode: 'dropdown',
          },
          default: {},
        })}
      />
    </View>
  );
};

export default PickerWithTitle;
