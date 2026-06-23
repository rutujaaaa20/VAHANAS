import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "@/constants/colors";

type RoleCardProps = {
  emoji: string;
  title: string;
  description: string;
  onPress: () => void;
};

export default function RoleCard({
  emoji,
  title,
  description,
  onPress,
}: RoleCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.leftSection}>
        <Text style={styles.icon}>{emoji}</Text>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>

      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.white,
    padding: 20,
    marginBottom: 18,
    borderRadius: 16,
    elevation: 3,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    fontSize: 40,
    marginRight: 18,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text,
  },
  description: {
    color: Colors.gray,
    marginTop: 4,
  },
  arrow: {
    fontSize: 24,
    color: Colors.primary,
  },
});