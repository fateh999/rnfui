import React, {useContext} from 'react';
import {ThemeContext} from './ThemeContext';
import ThemeType from './ThemeType';

function useActiveTheme() {
  const {color, statusbar}: ThemeType = useContext(ThemeContext);
  return {
    color: color,
    statusbar: statusbar,
  };
}

export default useActiveTheme;
