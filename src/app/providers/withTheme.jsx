import { ThemeProvider } from '@emotion/react';
import { darkTheme, whiteTheme } from '/src/shared/styles/theme';
import { useRouter } from 'next/router';

const withTheme = (WrappedComponent) => {
  const ComponentWithStore = (props) => {
    const { query } = useRouter();
    const getTheme = (theme) => {
      if (theme === 'white') {
        return whiteTheme;
      }

      return darkTheme;
    };
    return (
      <ThemeProvider theme={getTheme(query.theme)}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  };

  return ComponentWithStore;
};

export default withTheme;
