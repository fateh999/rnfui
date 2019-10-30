import React, {useMemo} from 'react';
import {ScrollView, ViewStyle, ScrollViewProps, StyleSheet} from 'react-native';
import useActiveTheme from '../Themes/useActiveTheme';

type BodyProps = {
  style?: ViewStyle;
  children?: any;
  bodyProps?: ScrollViewProps;
  backgroundColor?: string;
};

function Body({style, children, bodyProps, backgroundColor}: BodyProps) {
  const Theme = useActiveTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        bodyStyle: {
          flexGrow: 1,
          backgroundColor: backgroundColor || Theme.color.light,
          ...style,
        },
      }),
    [backgroundColor, Theme, style],
  );

  return useMemo(
    () => (
      <ScrollView contentContainerStyle={styles.bodyStyle} {...bodyProps}>
        {children}
      </ScrollView>
    ),
    [children, bodyProps, styles],
  );
}

export default Body;
