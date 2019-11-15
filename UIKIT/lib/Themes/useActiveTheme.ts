import {useContext} from 'react';
import {ThemeContext} from './ThemeContext';
import ThemeType from './ThemeType';

function useActiveTheme(): ThemeType {
  return useContext(ThemeContext);
}

export default useActiveTheme;
