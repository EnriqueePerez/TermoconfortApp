import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { EficienciasScreen } from '../screens/EficienciasScreen';
import { SobrecalentamientosScreen } from '../screens/SobrecalentamientosScreen';

const TopTab = createMaterialTopTabNavigator();

export const DataTopTab = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name="Sobrecalentamientos"
        component={SobrecalentamientosScreen}
        options={{ title: 'Sobrecalentamientos' }}
      />
      <TopTab.Screen
        name="Eficiencias de Trabajo"
        component={EficienciasScreen}
        options={{ title: 'Eficiencias de Trabajo' }}
      />
    </TopTab.Navigator>
  );
};
