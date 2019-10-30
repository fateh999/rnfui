import React, {useMemo} from 'react';
import {View} from 'react-native';

type SpacerProps = {
  size?: number;
  horizontal?: boolean;
  backgroundColor?: string;
};

function Spacer({size, horizontal, backgroundColor}: SpacerProps) {
  return useMemo(
    () => (
      <View
        style={{
          [horizontal ? 'width' : 'height']: size === undefined ? 10 : size,
          backgroundColor: backgroundColor || 'transparent',
        }}
      />
    ),
    [horizontal, backgroundColor, size],
  );
}

export default Spacer;
