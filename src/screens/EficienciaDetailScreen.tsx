import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootShowDataStackParams } from '../navigation/ShowDataStack';
import { DetailInfo } from '../components/DetailInfo';

interface Props
  extends StackScreenProps<RootShowDataStackParams, 'EficienciaDetailScreen'> {}

export const EficienciaDetailScreen = ({ navigation, route }: Props) => {
  const {
    tienda,
    CR,
    delta,
    id,
    fecha_hora,
    unidad,
    retorno,
    inyeccion,
    retorno2,
    inyeccion2,
    porcentaje_evaporador,
    ciclos_evaporador,
    porcentaje_condensador,
    ciclos_condensador,
    comentarios,
    nombre_usuario,
    aprobado,
  } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: 'Detalles - Eficiencia de Trabajo',
    });
  });
  return (
    <View style={styles.container}>
      <View style={styles.headersContainer}>
        <Text style={styles.mainTitles}>
          {tienda} - {CR}
        </Text>
      </View>
      <View style={styles.headersContainer}>
        <Text style={styles.mainTitles}>Delta</Text>
        <Text style={styles.headerSubtitles}>
          {new Date(fecha_hora).toLocaleTimeString()}
        </Text>
      </View>
      <View style={styles.headersContainer}>
        <Text
          style={[
            styles.mainTitles,
            aprobado === 'Si' ? styles.green : styles.red,
          ]}>
          {delta} °C
        </Text>
        <Text style={styles.headerSubtitles}>ID: {id}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <DetailInfo title="Equipo" subtitle={unidad} />
          <DetailInfo
            title="Fecha"
            subtitle={new Date(fecha_hora).toLocaleDateString()}
          />
        </View>
        <View style={styles.details}>
          <DetailInfo title="Retorno" subtitle={retorno} />
          <DetailInfo title="Inyección" subtitle={`${inyeccion} °C`} />
        </View>
        <View style={styles.details}>
          {retorno2 !== 0 ? (
            <DetailInfo title="Retorno 2" subtitle={`${retorno2} °C`} />
          ) : null}
          {retorno2 !== 0 ? (
            <DetailInfo title="Inyección 2" subtitle={`${inyeccion2} °C`} />
          ) : null}
        </View>
        <View style={styles.details}>
          <DetailInfo
            title="% Evaporador"
            subtitle={`${porcentaje_evaporador} %`}
          />
          <DetailInfo
            title="C. Evaporador"
            subtitle={`${ciclos_evaporador} ciclos`}
          />
        </View>
        <View style={styles.details}>
          <DetailInfo
            title="% Condensador"
            subtitle={`${porcentaje_condensador} %`}
          />
          <DetailInfo
            title="C. Condensador"
            subtitle={`${ciclos_condensador} ciclos`}
          />
        </View>
      </View>
      <View>
        <Text style={styles.extraDataTitles}>Comentarios</Text>
        <Text style={styles.comments}>{comentarios}</Text>
      </View>
      <View>
        <Text style={styles.extraDataTitles}>Calculado por:</Text>
        <Text style={styles.headerSubtitles}>{nombre_usuario}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 21,
  },
  headersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainTitles: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 2,
  },
  headerSubtitles: {
    fontFamily: 'Open Sans',
    fontSize: 17,
  },
  detailsContainer: {
    marginTop: 36,
    marginBottom: 32,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  extraDataTitles: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: 17,
    marginBottom: 8,
  },
  comments: {
    fontFamily: 'Open Sans',
    fontStyle: 'italic',
    fontSize: 17,
    marginBottom: 16,
  },
  green: {
    color: '#028A0C',
  },
  red: {
    color: '#D90452',
  },
});
