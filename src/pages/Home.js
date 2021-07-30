import React, { useEffect, useState } from 'react';
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
  const [greeting, setGreetting] = useState('');

  function handleAddNewSkill()
  {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
      setGreetting('Bom dia!');
    }
    else if (currentHour >= 12 && currentHour < 18) {
      setGreetting('Boa tarde!');
    }
    else
    {
      setGreetting('Boa noite!');
    }
  }, [mySkills])

return (
  <View style={ styles.container }>
    <Text style={ styles.title }>Olá, João</Text>

    <Text style={[styles.greetings, {marginTop: 10, marginBottom: 5}]}>
      { greeting }
    </Text>

    <TextInput style={ styles.input } 
      placeholder="Nova habilidade" 
      placeholderTextColor="#999"
      onChangeText={ setNewSkill } 
    />
  
    <Button onPress={ handleAddNewSkill } />

    <Text style={[styles.title, { marginVertical: 40, marginBottom: 30 }]}>
      Minhas habilidades
    </Text>

    

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
  greetings:
  {
    fontSize: 16,
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