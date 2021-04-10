import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  temp_sobrecalentamiento: number;
  tienda: string;
  unidad: string;
  aprobado: 'Si' | 'No';
  fecha: string;
  nombre_usuario: string;
}

export const SobrecalentamientoPreview = ({
  temp_sobrecalentamiento,
  tienda,
  unidad,
  aprobado,
  fecha,
  nombre_usuario,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.dataRowContainer}>
        <Text style={styles.mainTitle}>Temperatura de Sobrecalentamiento</Text>
        <Text
          style={[
            styles.sobrecalentamientoTemp,
            aprobado === 'Si' ? styles.green : styles.red,
          ]}>
          {temp_sobrecalentamiento} °C
        </Text>
      </View>
      <View style={styles.dataRowContainer}>
        <Text style={styles.details}>
          {tienda} - {unidad}
        </Text>
        <Text
          style={[
            styles.details,
            aprobado === 'Si' ? styles.green : styles.red,
          ]}>
          {aprobado === 'Si' ? 'Aprobado' : 'No Aprobado'}
        </Text>
      </View>
      <View style={styles.dataRowContainer}>
        <Text style={styles.details}>
          {new Date(fecha).toLocaleDateString()}
        </Text>
        <Text style={styles.details}>Calculado por: {nombre_usuario}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CDCDCD',
    borderRadius: 10,
    marginHorizontal: 8,
    marginBottom: 8,
    padding: 8,
  },
  green: {
    color: '#028A0C',
  },
  red: {
    color: '#D90452',
  },
  mainTitle: {
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
    color: '#242425',
    fontWeight: 'bold',
  },
  sobrecalentamientoTemp: {
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
    color: '#242425',
    fontWeight: 'bold',
  },
  dataRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    fontSize: 13,
    fontFamily: 'OpenSans-Regular',
    color: '#242425',
  },
});
