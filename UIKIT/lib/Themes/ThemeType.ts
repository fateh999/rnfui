import {StatusBarStyle} from 'react-native';

type ThemeType = {
  color: {
    dark: string;
    shadow: string;
    danger: string;
    primary: string;
    warning: string;
    light: string;
    overlay: string;
    white: string;
    black: string;
  };
  statusbar: {
    style: StatusBarStyle;
    backgroundColor: string;
  };
};

export default ThemeType;
