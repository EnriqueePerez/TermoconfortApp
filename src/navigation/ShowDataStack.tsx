import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SobrecalentamientoDetailScreen } from '../screens/SobrecalentamientoDetailScreen';
import { Sobrecalentamiento, EficienciaDeTrabajo } from '../types/graphqlTypes';
import { DataTopTab } from './DataTopTab';
import { EficienciaDetailScreen } from '../screens/EficienciaDetailScreen';

export type RootShowDataStackParams = {
  DataTopTab: undefined;
  SobrecalentamientoDetailScreen: Sobrecalentamiento;
  EficienciaDetailScreen: EficienciaDeTrabajo;
};

const DataStack = createStackNavigator<RootShowDataStackParams>();

export const ShowDataStack = () => {
  return (
    <DataStack.Navigator>
      <DataStack.Screen
        name="DataTopTab"
        component={DataTopTab}
        //this is the right way to hide header on specific screens/components
        options={{ header: () => null }}
      />
      <DataStack.Screen
        name="SobrecalentamientoDetailScreen"
        component={SobrecalentamientoDetailScreen}
      />
      <DataStack.Screen
        name="EficienciaDetailScreen"
        component={EficienciaDetailScreen}
      />
    </DataStack.Navigator>
  );
};
