import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaView } from 'react-native';
import { ShowDataStack } from './src/navigation/ShowDataStack';

// const BottomTabs = createBottomTabNavigator();

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <ShowDataStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
