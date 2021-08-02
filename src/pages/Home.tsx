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

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreetting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldState => [...oldState, data]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreetting('Bom dia!');
    }
    else if (currentHour >= 12 && currentHour < 18) {
      setGreetting('Boa tarde!');
    }
    else {
      setGreetting('Boa noite!');
    }
  })

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Olá, João</Text>

      <Text style={styles.greetings}>
        {greeting}
      </Text>

      <TextInput style={styles.input}
        placeholder="Nova habilidade"
        placeholderTextColor="#999"
        onChangeText={setNewSkill}
      />

      <Button
        title="Adicionar habilidade"
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, { marginVertical: 20, marginBottom: 10 }]}>
        Minhas habilidades
      </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard skill={item.name} />
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
    color: '#fff',
    marginTop: 5,
    marginBottom: 5
  },
  input:
  {
    backgroundColor: '#353535',
    color: '#fff',
    fontSize: 18,
    padding: 10,
    marginTop: 10,
    borderRadius: 5
  }
});