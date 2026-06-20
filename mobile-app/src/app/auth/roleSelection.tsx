import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function RoleSelection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join VAHANAS</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push("/auth/register?role=student")
        }
      >
        <Text style={styles.buttonText}>Student</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push("/auth/register?role=driver")
        }
      >
        <Text style={styles.buttonText}>Driver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1976D2",
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
});