import React from 'react';
import LightTheme from './LightTheme';

export const ThemeContext = React.createContext<any | null>(LightTheme);

export const ThemeProvider = ThemeContext.Provider;

export const ThemeConsumer = ThemeContext.Consumer;
