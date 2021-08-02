import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest } : SkillCardProps) {
  return (
    <TouchableOpacity 
    style={styles.buttonSkill}
    {...rest}
    >
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