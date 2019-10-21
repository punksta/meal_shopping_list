import {Animated, StyleSheet, View, ViewProps} from 'react-native';
import React from 'react';

interface Props extends ViewProps {
  children: React.ReactNode;
  animatedValue: Animated.Value;
}

const AnimatedAppear = ({animatedValue, children, style}: Props) => {
  const ownStyle = React.useMemo(
    () => ({
      transform: [
        {
          translateY: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [350, 0],
          }),
        },
        {
          scaleX: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0.3, 1],
          }),
        },
      ],
      opacity: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.3, 1],
      }),
      backgroundColor: '#f9f9f9',
      borderColor: '#aeb3ae',
      borderTopWidth: StyleSheet.hairlineWidth,
    }),
    [animatedValue],
  );
  return <Animated.View style={[ownStyle, style]}>{children}</Animated.View>;
};

export default AnimatedAppear;
