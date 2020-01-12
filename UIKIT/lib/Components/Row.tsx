import React, {useMemo} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

type RowProps = {
  children?: any;
  style?: ViewStyle;
  flex?: number;
};

function Row({children, style, flex}: RowProps) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        rowStyles: {
          flexDirection: 'row',
          flex: flex === undefined ? 1 : flex,
          ...style,
        },
      }),
    [flex, style],
  );

  return useMemo(() => <View style={styles.rowStyles}>{children}</View>, [
    styles,
    children,
  ]);
}

export default Row;
