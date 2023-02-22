import { useContext } from 'react';
import { ThemeValueContext } from '../Provider/ThemeProvider';

function useThemeValue() {
  const context = useContext(ThemeValueContext);
  if (!context) {
  }
  return context;
}

export default useThemeValue;
