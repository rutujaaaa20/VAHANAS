import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

import RoleCard from "@/components/ui/RoleCard";
import { Colors } from "@/constants/colors";

export default function RoleSelection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Role</Text>

      <Text style={styles.subtitle}>
        Select how you want to continue
      </Text>

      <RoleCard
        emoji="🎓"
        title="Student"
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
        emoji="🛡️"
        title="Administrator"
        description="Manage buses and drivers"
        onPress={() => router.push("/auth/login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 32,
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