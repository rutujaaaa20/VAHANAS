import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🚌</Text>

      <Text style={styles.title}>Welcome to VAHANAS</Text>

      <Text style={styles.subtitle}>
        Vehicle Availability Harmonization{"\n"}
        and Navigation System
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/auth/role-selection")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  logo: {
    fontSize: 70,
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 12,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginBottom: 50,
    lineHeight: 28,
  },

  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 12,
    elevation: 4,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});