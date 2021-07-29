import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export function Button({ onPress }){
    return (
    <TouchableOpacity style={ styles.button }
        activeOpacity={ 0.5 }
        onPress={ onPress }
        >
        <Text style={ styles.buttonText }>Adicionar</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:
    {
      backgroundColor: '#724eac',
      padding: 15,
      borderRadius: 5,
      marginTop: 15,
      alignItems: 'center'
    },
    buttonText:
    {
      color: '#fff',
      fontWeight: 'bold'
    }
  });