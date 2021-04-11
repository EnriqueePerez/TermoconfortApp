import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  subtitle: string | number;
}

export const DetailInfo = ({ title, subtitle }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 2,
    flex: 33, //each component its going to take 33% of the view
    borderTopWidth: 1,
  },
  title: {
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 5,
    fontFamily: 'Open Sans',
    fontSize: 17,
    fontWeight: '700',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'Open Sans',
    fontSize: 15,
  },
});
