import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootSobrecalentamientoStackParams } from '../navigation/ShowDataStack';
import { DetailInfo } from '../components/DetailInfo';

interface Props
  extends StackScreenProps<
    RootSobrecalentamientoStackParams,
    'SobrecalentamientoDetail'
  > {}

export const SobrecalentamientoDetailScreen = ({
  navigation,
  route,
}: Props) => {
  const {
    tienda,
    CR,
    temp_sobrecalentamiento,
    id,
    fecha_hora,
    unidad,
    refrigerante,
    presion_arranque,
    presion_paro,
    presion_succion,
    resistencia_pt1000,
    temp_tubo,
    temp_saturacion,
    comentarios,
    nombre_usuario,
    aprobado,
  } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: 'Detalles - Sobrecalentamiento',
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
        <Text style={styles.mainTitles}>T. Sobrecalentamiento</Text>
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
          {temp_sobrecalentamiento} °C
        </Text>
        <Text style={styles.headerSubtitles}>ID: {id}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <DetailInfo title="Equipo" subtitle={unidad} />
          <DetailInfo title="Refrigerante" subtitle={refrigerante} />
          <DetailInfo
            title="Fecha"
            subtitle={new Date(fecha_hora).toLocaleDateString()}
          />
        </View>

        <View style={styles.details}>
          <DetailInfo
            title="P. Arranque"
            subtitle={`${presion_arranque} psi`}
          />
          <DetailInfo title="P. Paro" subtitle={`${presion_paro} psi`} />
          <DetailInfo title="P. Succión" subtitle={`${presion_succion} psi`} />
        </View>
        <View style={styles.details}>
          <DetailInfo title="R. PT1000" subtitle={`${resistencia_pt1000} Ω`} />
          <DetailInfo title="T. Tubo" subtitle={`${temp_tubo} °C`} />
          <DetailInfo
            title="T. Saturación"
            subtitle={`${temp_saturacion} °C`}
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
