import React, {useMemo, Fragment} from 'react';
import {View, StyleSheet, ViewStyle, ViewProps} from 'react-native';
import {VisibilityToggle} from '..';

type CenterProps = {
  children?: any;
  allAxis?: boolean;
  vertical?: boolean;
  flex?: number;
  style?: ViewStyle;
  centerProps?: ViewProps;
};

function Center({
  allAxis,
  children,
  flex,
  vertical,
  style,
  centerProps,
}: CenterProps) {
  const centerType = useMemo(
    () => (allAxis ? 'allAxis' : vertical ? 'vertical' : 'horizontal'),
    [allAxis, vertical],
  );

  const styles = useMemo(
    () =>
      StyleSheet.create({
        horizontalStyles: {
          flex: flex || 0,
          alignItems: 'center',
          ...style,
        },
        verticalStyles: {
          flex: flex || 1,
          justifyContent: 'center',
          ...style,
        },
        allAxisStyles: {
          flex: flex || 1,
          justifyContent: 'center',
          alignItems: 'center',
          ...style,
        },
      }),
    [flex, style],
  );

  return useMemo(() => {
    return (
      <Fragment>
        <VisibilityToggle visible={centerType === 'vertical'}>
          <View style={styles.verticalStyles} {...centerProps}>
            {children}
          </View>
        </VisibilityToggle>

        <VisibilityToggle visible={centerType === 'horizontal'}>
          <View style={styles.horizontalStyles} {...centerProps}>
            {children}
          </View>
        </VisibilityToggle>

        <VisibilityToggle visible={centerType === 'allAxis'}>
          <View style={styles.allAxisStyles} {...centerProps}>
            {children}
          </View>
        </VisibilityToggle>
      </Fragment>
    );
  }, [centerType, children, centerProps, styles]);
}

export default Center;
