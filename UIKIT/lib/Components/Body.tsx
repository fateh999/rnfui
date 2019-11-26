import React, {useMemo} from 'react';
import {ScrollView, ViewStyle, ScrollViewProps, StyleSheet} from 'react-native';
import useActiveTheme from '../Themes/useActiveTheme';

type BodyProps = {
  style?: ViewStyle;
  children?: any;
  bodyProps?: ScrollViewProps;
  backgroundColor?: string;
  transparent?: boolean;
};

function Body({
  style,
  children,
  bodyProps,
  backgroundColor,
  transparent,
}: BodyProps) {
  const Theme = useActiveTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        bodyStyle: {
          flexGrow: 1,
          backgroundColor: transparent
            ? 'transparent'
            : backgroundColor || Theme.color.light,
          ...style,
        },
      }),
    [backgroundColor, Theme, style, transparent],
  );

  return useMemo(
    () => (
      <ScrollView
        contentContainerStyle={styles.bodyStyle}
        keyboardShouldPersistTaps={'handled'}
        {...bodyProps}>
        {children}
      </ScrollView>
    ),
    [children, bodyProps, styles],
  );
}

export default Body;
