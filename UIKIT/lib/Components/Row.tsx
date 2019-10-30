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
          flex: flex || 1,
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
