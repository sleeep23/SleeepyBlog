import { useContext } from 'react';
import { ThemeActionContext } from '../Provider/ThemeProvider';

function useThemeAction() {
  const context = useContext(ThemeActionContext);
  if (!context) {
  }
  return context;
}

export default useThemeAction;
