import React from "react"
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native"

interface ISkillCardProps extends TouchableOpacityProps {
  skill: string
}

function SkillCard({ skill, ...rest }: ISkillCardProps) {
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
  buttonSkill: {
    backgroundColor: "#1F1E25",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginVertical: 10
  },
  textSkill: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  }
})

export { SkillCard }