import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

import InputField from "@/components/ui/InputField";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { Colors } from "@/constants/colors";
import { registerUser } from "@/services/authService";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("passenger");
  const [role, setRole] = useState("Passenger");

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        "Error",
        "Password must be at least 6 characters."
      );
      return;
    }

    try {
      await registerUser(name, email, password, role);

      Alert.alert(
        "Success",
        "Registration successful!",
        [
          {
            text: "OK",
            onPress: () => router.replace("/auth/login"),
          },
        ]
      );
    } catch (error: any) {
      Alert.alert(
        "Registration Failed",
        error.message || "Something went wrong."
      );
    }
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
        placeholder="Email Address"
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
            role === "passenger" && styles.selectedRole,
          ]}
          onPress={() => setRole("passenger")}
        >
          <Text
            style={[
              styles.roleText,
              role === "passenger" && styles.selectedRoleText,
            ]}
          >
            Passenger
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.roleButton,
            role === "driver" && styles.selectedRole,
          ]}
          onPress={() => setRole("driver")}
        >
          <Text
            style={[
              styles.roleText,
              role === "driver" && styles.selectedRoleText,
            ]}
          >
            Driver
          </Text>
        </TouchableOpacity>
      </View>

      <PrimaryButton
        title="Register"
        onPress={handleRegister}
      />

      <TouchableOpacity
        onPress={() => router.replace("/auth/login")}
      >
        <Text style={styles.loginText}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
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
    fontSize: 55,
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
    color: Colors.primary,
  },

  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  roleButton: {
    flex: 1,
    padding: 15,
    padding: 14,
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 5,
  },

  selectedRole: {
  activeRole: {
    backgroundColor: Colors.primary,
  },

  roleText: {
    color: "#111827",
    fontWeight: "600",
  },

  selectedRoleText: {
    color: "#FFFFFF",
  },

  loginText: {
    marginTop: 20,
    textAlign: "center",
    color: Colors.primary,
    fontWeight: "600",
  },
});