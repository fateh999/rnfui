import React, {useMemo, Fragment} from 'react';
import {
  View,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableOpacityProps,
  ViewStyle,
  TouchableNativeFeedbackProps,
  StyleSheet,
} from 'react-native';
import useActiveTheme from '../Themes/useActiveTheme';
import {VisibilityToggle} from '..';

type ClickProps = {
  children?: any;
  clickProps?: TouchableNativeFeedbackProps | TouchableOpacityProps;
  style?: ViewStyle;
  onPress?: any;
  onLongPress?: any;
  noFeedback?: boolean;
  iOSFeedback?: boolean;
  backgroundColor?: string;
  rippleColor?: string;
};

function Click({
  clickProps,
  style,
  children,
  onPress,
  noFeedback,
  iOSFeedback,
  onLongPress,
  rippleColor,
}: ClickProps) {
  const Theme = useActiveTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        contentStyle: {
          ...style,
        },
      }),
    [Theme, style],
  );

  return useMemo(
    () => (
      <Fragment>
        <VisibilityToggle visible={Platform.OS === 'ios'}>
          <VisibilityToggle visible={noFeedback ? false : true}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={onPress}
              onLongPress={onLongPress}
              {...clickProps}>
              <View style={styles.contentStyle}>{children}</View>
            </TouchableOpacity>
          </VisibilityToggle>

          <VisibilityToggle visible={noFeedback ? true : false}>
            <TouchableWithoutFeedback
              onPress={onPress}
              onLongPress={onLongPress}
              {...clickProps}>
              <View style={styles.contentStyle}>{children}</View>
            </TouchableWithoutFeedback>
          </VisibilityToggle>
        </VisibilityToggle>

        <VisibilityToggle visible={Platform.OS === 'android'}>
          <VisibilityToggle visible={iOSFeedback ? true : false}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={onPress}
              onLongPress={onLongPress}
              {...clickProps}>
              <View style={styles.contentStyle}>{children}</View>
            </TouchableOpacity>
          </VisibilityToggle>

          <VisibilityToggle visible={iOSFeedback ? false : true}>
            <TouchableNativeFeedback
              useForeground
              background={TouchableNativeFeedback.Ripple(
                rippleColor || Theme.color.light,
              )}
              onPress={onPress}
              onLongPress={onLongPress}
              {...clickProps}>
              <View style={styles.contentStyle}>{children}</View>
            </TouchableNativeFeedback>
          </VisibilityToggle>
        </VisibilityToggle>
      </Fragment>
    ),
    [
      iOSFeedback,
      noFeedback,
      onPress,
      onLongPress,
      styles,
      rippleColor,
      clickProps,
      children,
      Theme.color.light,
    ],
  );
}

export default Click;
