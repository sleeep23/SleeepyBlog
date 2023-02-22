import React, { createContext, ReactNode, useMemo, useState } from 'react';

export const ThemeValueContext = createContext(true);
export const ThemeActionContext = createContext<any | null>(null);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const actions = useMemo(
    () => ({
      changeTheme() {
        setIsLightTheme((prev) => !prev);
      },
    }),
    []
  );
  return (
    <ThemeActionContext.Provider value={actions}>
      <ThemeValueContext.Provider value={isLightTheme}>
        {children}
      </ThemeValueContext.Provider>
    </ThemeActionContext.Provider>
  );
}

export default ThemeProvider;
