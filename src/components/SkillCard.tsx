import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill:
  {
    backgroundColor: '#353535',
    padding: 10,
    marginTop: 10,
    borderRadius: 25,
    alignItems: 'center'
  },
  textSkill:
  {
    fontSize: 18,
    color: '#fff'
  }
});