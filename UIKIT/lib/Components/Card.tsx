import React, { useMemo} from 'react';
import {ViewStyle, ViewProps, StyleSheet, View, Platform} from 'react-native';
import useActiveTheme from '../Themes/useActiveTheme';

type CardProps = {
  style?: ViewStyle;
  children?: any;
  elevation: number;
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

  const iosShadowElevation = useMemo(() => ({
    shadowOpacity: 0.0015 * elevation + 0.18,
    shadowRadius: 0.54 * elevation,
    shadowOffset: {
      height: 0.6 * elevation,
    },
  }),[elevation]);

  const styles = useMemo(() => StyleSheet.create({
    elevatedViewStyle: {
      backgroundColor: transparent
        ? 'transparent'
        : backgroundColor || Theme.color.primary,
      borderRadius: rounded ? roundness || 5 : 0,
      ...style,
    },
  }),[style, Theme, rounded, roundness, backgroundColor, transparent]);

  const cardStyles: any = Platform.OS === 'ios'? iosShadowElevation : {elevation: elevation}

  return (
    <View
      style={[styles.elevatedViewStyle, cardStyles]}
      {...cardProps}>
      {children}
    </View>
  );
}

Card.defaultProps = {
  elevation: 5
}

export default (Card);
