import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SobrecalentamientoPreview } from '../components/SobrecalentamientoPreview';
import { gql, GraphQLClient } from 'graphql-request';
import { SERVER_IP } from 'react-native-dotenv';
import { Sobrecalentamiento } from '../types/graphqlTypes';
import { StackScreenProps } from '@react-navigation/stack';
import { RootShowDataStackParams } from '../navigation/ShowDataStack';

interface Props
  extends StackScreenProps<
    RootShowDataStackParams,
    'SobrecalentamientoDetailScreen'
  > {}

export const SobrecalentamientosScreen = ({ navigation }: Props) => {
  const [sobrecalentamientos, setSobrecalentamientos] = useState<
    Sobrecalentamiento[]
  >();

  const handlePress = (sobrecalentamiento: Sobrecalentamiento) => {
    navigation.navigate('SobrecalentamientoDetailScreen', sobrecalentamiento);
  };

  const fetchSobrecalentamientos = async () => {
    const graphQLClient = new GraphQLClient(`${SERVER_IP}/api`, {
      mode: 'cors',
    });

    const query = gql`
      {
        getSobrecalentamientos {
          id
          fecha_hora
          CR
          tienda
          id_usuario
          nombre_usuario
          unidad
          refrigerante
          presion_arranque
          presion_paro
          presion_succion
          resistencia_pt1000
          temp_tubo
          temp_saturacion
          temp_sobrecalentamiento
          temp_ambiente
          aprobado
          comentarios
        }
      }
    `;

    await graphQLClient
      .request(query)
      .then((data) => {
        // console.log(JSON.stringify(data, undefined, 2));
        console.log('fetching sobrecalentamientos');
        setSobrecalentamientos(data.getSobrecalentamientos);
        // localStorage.setItem('stores', JSON.stringify(data.getTiendas));
        // getNewUpdateStoresDate();
      })
      .catch((error) => {
        console.error('error fetching sobrecalentamientos', error);
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Error al cargar las tiendas',
        //   text: 'Por favor, intenta mas tarde o reporta el problema',
        // });
      });
  };

  useEffect(() => {
    fetchSobrecalentamientos();
  }, []);

  return (
    <View>
      <Text style={styles.title}>Sobrecalentamientos</Text>
      <FlatList
        data={sobrecalentamientos}
        renderItem={({ item }) => (
          <SobrecalentamientoPreview
            temp_sobrecalentamiento={item.temp_sobrecalentamiento}
            tienda={item.tienda}
            unidad={item.unidad}
            aprobado={item.aprobado}
            fecha={item.fecha_hora}
            nombre_usuario={item.nombre_usuario}
            onPress={() => handlePress(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 28,
    marginTop: 21,
    marginLeft: 16,
    marginBottom: 21,
  },
});
