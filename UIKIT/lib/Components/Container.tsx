import React, {Fragment, useMemo} from 'react';
import {
  View,
  Platform,
  SafeAreaView,
  ViewStyle,
  StatusBar,
  ViewProps,
  StyleSheet,
  StatusBarStyle,
} from 'react-native';
import useActiveTheme from '../Themes/useActiveTheme';
import {VisibilityToggle} from '..';

type ContainerProps = {
  style?: ViewStyle;
  children?: any;
  containerProps?: ViewProps;
  statusBarStyle?: StatusBarStyle;
  statusBarBackgroundColor?: string;
  fullScreen?: boolean;
};

function Container({
  style,
  children,
  containerProps,
  statusBarStyle,
  statusBarBackgroundColor,
  fullScreen,
}: ContainerProps) {
  const Theme = useActiveTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        iOSContainerStyle: {
          flex: 1,
          backgroundColor: Theme.color.light,
          ...style,
        },
        iOSSafeAreaStyle: {
          flex: 0,
          backgroundColor:
            statusBarBackgroundColor ||
            Theme.statusbar.backgroundColor ||
            Theme.color.light,
        },
        androidContainerStyle: {
          flex: 1,
          ...style,
        },
      }),
    [
      style,
      statusBarBackgroundColor,
      Theme.statusbar.backgroundColor,
      Theme.color.light,
    ],
  );

  return useMemo(
    () => (
      <Fragment>
        <StatusBar
          barStyle={statusBarStyle || Theme.statusbar.style}
          backgroundColor={
            statusBarBackgroundColor || Theme.statusbar.backgroundColor
          }
          translucent={fullScreen || false}
        />
        <VisibilityToggle visible={Platform.OS === 'ios'}>
          <VisibilityToggle visible={fullScreen ? true : false}>
            <View style={styles.androidContainerStyle} {...containerProps}>
              {children}
            </View>
          </VisibilityToggle>
          <VisibilityToggle visible={fullScreen ? false : true}>
            <Fragment>
              <SafeAreaView style={styles.iOSSafeAreaStyle} />
              <SafeAreaView
                style={styles.iOSContainerStyle}
                {...containerProps}>
                {children}
              </SafeAreaView>
            </Fragment>
          </VisibilityToggle>
        </VisibilityToggle>
        <VisibilityToggle visible={Platform.OS === 'android'}>
          <View style={styles.androidContainerStyle} {...containerProps}>
            {children}
          </View>
        </VisibilityToggle>
      </Fragment>
    ),
    [
      statusBarStyle,
      Theme.statusbar.style,
      statusBarBackgroundColor,
      Theme.statusbar.backgroundColor,
      fullScreen,
      styles,
      containerProps,
      children,
    ],
  );
}

export default Container;
