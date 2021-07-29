import React, { useState } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

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
  
    <Button onPress={ handleAddNewSkill } />

    <Text style={[styles.title, { marginVertical: 40, marginBottom: 30 }]}>Minhas habilidades</Text>

    <FlatList
    showsVerticalScrollIndicator={false}
    data={ mySkills }
    keyExtractor={item => item}
    renderItem={({ item }) => (
      <SkillCard skill={ item } />
    )}
    />

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
    fontSize: 18,
    padding: 10,
    marginTop: 15,
    borderRadius: 5
  }
});