import React, {useState} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {styles, colores} from '../theme/theme';

const initialState = {
  matricula: '',
  password: '',
};

export const Login = () => {
  const [datos, setDatos] = useState(initialState);
  const {matricula, password} = datos;

  const handleChange = (nom, valor) => {
    setDatos({...datos, [nom]: valor});
  };

  return (
    <View style={styles.loginContainer}>
      <Image
        source={require('../img/Penejitos.png')}
        style={styles.loginImage}
      />
      <Text style={styles.loginTexto}>Introduce tu matricula y contraseña</Text>

      <TextInput
        placeholder="Matricula"
        textAlign="center"
        placeholderTextColor={colores.uno}
        style={styles.loginInput}
        value={matricula}
        onChangeText={valor => handleChange('matricula', valor)}></TextInput>

      <TextInput
        placeholder="Contraseña"
        textAlign="center"
        placeholderTextColor={colores.uno}
        style={styles.loginInput}
        secureTextEntry={true}
        value={password}
        onChangeText={valor => handleChange('password', valor)}></TextInput>

      <TouchableOpacity style={{flex: 1}}>
        <View style={styles.loginBoton}>
          <Text style={styles.loginTextoBoton}>Ingresar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
