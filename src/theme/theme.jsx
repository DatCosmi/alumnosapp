import React from 'react';
import {StyleSheet} from 'react-native';

export const colores = {
  uno: '#957dad',
  dos: '#d291bc',
  tres: '#e0bbe4',
  cuatro: '#fec8d8',
  cinco: '#ffdfd3',
  seis: '#fff',
  siete: 'grey',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colores.seis,
  },
  loginImage: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: colores.seis,
    padding: 20,
    alignItems: 'center',
  },
  loginInput: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderColor: colores.siete,
  },
  loginTexto: {
    fontSize: 20,
    color: colores.uno,
    fontWeight: 'bold',
  },
  loginTextoBoton: {
    fontSize: 15,
    color: colores.uno,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginBoton: {
    backgroundColor: colores.tres,
    width: 100,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10,
  },
});
