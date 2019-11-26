import React, {memo} from 'react';
import {ViewStyle, ViewProps, StyleSheet} from 'react-native';
import ElevatedView from '../Config/Library/ElevatedView';
import useActiveTheme from '../Themes/useActiveTheme';

type CardProps = {
  style?: ViewStyle;
  children?: any;
  elevation?: number;
  rounded?: boolean;
  roundness?: number;
  cardProps?: ViewProps;
  transparent?: boolean;
  backgroundColor?: string;
};

function Card({
  style,
  children,
  elevation,
  rounded,
  roundness,
  cardProps,
  transparent,
  backgroundColor,
}: CardProps) {
  const Theme = useActiveTheme();

  const styles = StyleSheet.create({
    elevatedViewStyle: {
      backgroundColor: transparent
        ? 'transparent'
        : backgroundColor || Theme.color.primary,
      borderRadius: rounded ? roundness || 5 : 0,
      ...style,
    },
  });

  return (
    <ElevatedView
      elevation={elevation !== undefined ? elevation : 0}
      style={styles.elevatedViewStyle}
      {...cardProps}>
      {children}
    </ElevatedView>
  );
}

export default memo(Card);
