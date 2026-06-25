import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import InputField from "@/components/ui/InputField";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { Colors } from "@/constants/colors";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Passenger");

  const handleRegister = () => {
    console.log("Register clicked");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo}>🚌</Text>

      <Text style={styles.title}>Create Account</Text>

      <InputField
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      <InputField
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <InputField
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <InputField
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Text style={styles.roleLabel}>Select Role</Text>

      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[
            styles.roleButton,
            role === "Passenger" && styles.activeRole,
          ]}
          onPress={() => setRole("Passenger")}
        >
          <Text style={styles.roleText}>Passenger</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.roleButton,
            role === "Driver" && styles.activeRole,
          ]}
          onPress={() => setRole("Driver")}
        >
          <Text style={styles.roleText}>Driver</Text>
        </TouchableOpacity>
      </View>

      <PrimaryButton title="Register" onPress={handleRegister} />
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
    marginBottom: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary,
    marginBottom: 30,
  },

  roleLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },

  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  roleButton: {
    flex: 1,
    padding: 14,
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 5,
  },

  activeRole: {
    backgroundColor: Colors.primary,
  },

  roleText: {
    color: "#111827",
    fontWeight: "600",
  },
});