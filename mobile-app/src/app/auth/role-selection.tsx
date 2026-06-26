import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

import RoleCard from "@/components/ui/RoleCard";
import { Colors } from "@/constants/colors";

export default function RoleSelection() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo}>🚌</Text>

      <Text style={styles.title}>Choose Your Role</Text>

      <Text style={styles.subtitle}>
        Select how you want to continue
      </Text>

      <RoleCard
        emoji="🧍"
        title="Passenger"
        description="Track buses in real time"
        onPress={() => router.push("/auth/login")}
      />

      <RoleCard
        emoji="🚌"
        title="Driver"
        description="Share your live location"
        onPress={() => router.push("/auth/login")}
      />

      <RoleCard
        emoji="⚙️"
        title="Administrator"
        description="Manage buses and drivers"
        onPress={() => router.push("/auth/login")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    padding: 24,
  },

  logo: {
    fontSize: 50,
    textAlign: "center",
    marginBottom: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: Colors.gray,
    marginTop: 10,
    marginBottom: 40,
  },
});