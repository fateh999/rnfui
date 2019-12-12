import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';

type DisabledViewProps = {
  disabled: boolean;
  children: any;
  opacity?: number;
};

function DisabledView({disabled, children, opacity}: DisabledViewProps) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        disabledStyle: {
          opacity: disabled ? opacity || 0.5 : 1,
        },
      }),
    [disabled, opacity],
  );

  return useMemo(
    () => (
      <View
        style={styles.disabledStyle}
        pointerEvents={disabled ? 'auto' : 'none'}>
        {children}
      </View>
    ),
    [styles, disabled, children],
  );
}

export default DisabledView;
