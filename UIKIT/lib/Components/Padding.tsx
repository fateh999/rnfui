import React from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';

type PropType = {
  children?: any;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  horizontal?: boolean;
  vertical?: boolean;
  size?: number;
  style?: ViewStyle;
};

function Padding({
  children,
  left,
  right,
  top,
  bottom,
  horizontal,
  vertical,
  size,
  style,
}: PropType) {
  const styles = StyleSheet.create({
    paddingStyle: {
      paddingLeft: vertical ? 0 : right ? 0 : size,
      paddingRight: vertical ? 0 : left ? 0 : size,
      paddingTop: horizontal ? 0 : bottom ? 0 : size,
      paddingBottom: horizontal ? 0 : top ? 0 : size,
      ...style,
    },
  });

  return <View style={styles.paddingStyle}>{children}</View>;
}

Padding.defaultProps = {
  size: 15,
};

export default Padding;
