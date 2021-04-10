import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {View, Text, SafeAreaView} from 'react-native';
import {SobrecalentamientosScreen} from './src/screens/SobrecalentamientosScreen';

// const BottomTabs = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Eficiencias de Trabajo</Text>
    </View>
  );
}

const App = () => {
  return (
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
            component={SettingsScreen}
            options={{title: 'Eficiencia de Trabajo'}}
          />
        </TopTab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
