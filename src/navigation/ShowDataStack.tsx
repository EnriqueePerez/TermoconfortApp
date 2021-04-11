import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SobrecalentamientoDetailScreen } from '../screens/SobrecalentamientoDetailScreen';
import { Sobrecalentamiento } from '../types/graphqlTypes';
import { DataTopTab } from './DataTopTab';

export type RootSobrecalentamientoStackParams = {
  SobrecalentamientosScreen: undefined;
  SobrecalentamientoDetail: Sobrecalentamiento;
};

const DataStack = createStackNavigator();

export const ShowDataStack = () => {
  return (
    <DataStack.Navigator>
      <DataStack.Screen
        name="Sobrecalentamientos"
        component={DataTopTab}
        //this is the right way to hide header on specific screens/components
        options={{ header: () => null }}
      />
      <DataStack.Screen
        name="SobrecalentamientoDetail"
        component={SobrecalentamientoDetailScreen}
      />
    </DataStack.Navigator>
  );
};
