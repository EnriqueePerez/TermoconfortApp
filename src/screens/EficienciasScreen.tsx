import React, {useEffect, useState} from 'react';
import {GraphQLClient, gql} from 'graphql-request';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {EficienciaDeTrabajo} from '../types/graphqlTypes';
import {SERVER_IP} from 'react-native-dotenv';
import {EficienciaPreview} from '../components/EficienciaPreview';

export const EficienciasScreen = () => {
  const [eficienciasDeTrabajo, setEficienciasDeTrabajo] = useState<
    EficienciaDeTrabajo[]
  >();

  const fetchEficienciasDeTrabajo = async () => {
    const graphQLClient = new GraphQLClient(`${SERVER_IP}/api`, {
      mode: 'cors',
    });

    const query = gql`
      {
        getEficienciasDeTrabajo {
          id
          fecha_hora
          CR
          tienda
          id_usuario
          nombre_usuario
          unidad
          retorno
          inyeccion
          retorno2
          inyeccion2
          porcentaje_evaporador
          ciclos_evaporador
          porcentaje_condensador
          ciclos_condensador
          delta
          aprobado
          comentarios
        }
      }
    `;

    await graphQLClient
      .request(query)
      .then(data => {
        console.log('fetching eficiencias');
        // console.log(JSON.stringify(data, undefined, 2));
        setEficienciasDeTrabajo(data.getEficienciasDeTrabajo);
        // localStorage.setItem('stores', JSON.stringify(data.getTiendas));
        // getNewUpdateStoresDate();
      })
      .catch(error => {
        console.error('error fetching eficiencias', error);
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Error al cargar las tiendas',
        //   text: 'Por favor, intenta mas tarde o reporta el problema',
        // });
      });
  };

  useEffect(() => {
    fetchEficienciasDeTrabajo();
  }, []);
  return (
    <View>
      <Text style={styles.title}>Eficiencias de Trabajo</Text>
      <FlatList
        data={eficienciasDeTrabajo}
        renderItem={({item}) => (
          <EficienciaPreview
            delta={item.delta}
            tienda={item.tienda}
            unidad={item.unidad}
            aprobado={item.aprobado}
            fecha={item.fecha_hora}
            nombre_usuario={item.nombre_usuario}
          />
        )}
        keyExtractor={item => item.id}
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
