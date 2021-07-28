import React, { useState } from 'react';
import { View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill()
  {
    setMySkills(oldState => [...oldState, newSkill]);
  }

return (
  <View style={ styles.container }>
    <Text style={ styles.title }>Olá, João</Text>

    <TextInput style={ styles.input } 
      placeholder="Nova habilidade" 
      placeholderTextColor="#999"
      onChangeText={ setNewSkill } 
    />
  
    <TouchableOpacity style={ styles.button }
      activeOpacity={0.5}
      onPress={ handleAddNewSkill }
    >
      <Text style={ styles.buttonText }>Adicionar</Text>
    </TouchableOpacity>

    <Text style={[styles.title, { marginTop: 20 }]}>Minhas habilidades</Text>

  {
    mySkills.map(skill => (
      <TouchableOpacity key={skill} style={ styles.buttonSkill }>
        <Text style={ styles.textSkill }>
          { skill }
        </Text>
      </TouchableOpacity>
    ))
  }

  </View>
)  
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 50,
    backgroundColor: '#121015'
  },
  title:
  {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  input:
  {
    backgroundColor: '#353535',
    color: '#fff',
    fontSize: 16,
    padding: 10,
    marginTop: 15,
    borderRadius: 5
  },
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
    color: '#fff'
  },
  buttonSkill:
  {
    backgroundColor: '#353535',
    padding: 10,
    marginTop: 10, 
    borderRadius: 10,
    alignItems: 'center'
  },
  textSkill: 
  {
    fontSize: 16,
    color: '#fff'
  }
});