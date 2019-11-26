import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Platform} from 'react-native';

class ElevatedView extends Component {
  static propTypes = {
    elevation: PropTypes.number,
  };
  static defaultProps = {
    elevation: 0,
  };

  render() {
    const {elevation, style, ...otherProps} = this.props;

    if (Platform.OS === 'android') {
      return (
        <View
          elevation={elevation}
          style={[{elevation}, style]}
          {...otherProps}>
          {this.props.children}
        </View>
      );
    }

    if (elevation === 0) {
      return (
        <View style={style} {...otherProps}>
          {this.props.children}
        </View>
      );
    }

    const iosShadowElevation = {
      shadowOpacity: 0.0015 * elevation + 0.18,
      shadowRadius: 0.54 * elevation,
      shadowOffset: {
        height: 0.6 * elevation,
      },
    };

    return (
      <View style={[iosShadowElevation, style]} {...otherProps}>
        {this.props.children}
      </View>
    );
  }
}

export default ElevatedView;
