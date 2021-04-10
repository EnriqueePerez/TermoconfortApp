import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {SafeAreaView} from 'react-native';
import {SobrecalentamientosScreen} from './src/screens/SobrecalentamientosScreen';
import {EficienciasScreen} from './src/screens/EficienciasScreen';

// const BottomTabs = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <TopTab.Navigator>
          <TopTab.Screen
            name="Sobrecalentamientos"
            component={SobrecalentamientosScreen}
            options={{title: 'Sobrecalentamientos'}}
          />
          <TopTab.Screen
            name="Eficiencias de Trabajo"
            component={EficienciasScreen}
            options={{title: 'Eficiencias de Trabajo'}}
          />
        </TopTab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
