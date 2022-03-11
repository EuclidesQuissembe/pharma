import 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components';

import useCachedResources from './hooks/useCachedResources';

import Navigation from './navigation';

import { light } from './styles/themes';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={light}>
        <Navigation />
      </ThemeProvider>
    );
  }
}
