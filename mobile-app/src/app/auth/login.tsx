import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import InputField from "@/components/ui/InputField";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { Colors } from "@/constants/colors";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login clicked");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🚌</Text>

      <Text style={styles.title}>VAHANAS</Text>

      <Text style={styles.subtitle}>
        Login to continue
      </Text>

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

      <PrimaryButton title="Login" onPress={handleLogin} />

      <TouchableOpacity onPress={() => router.push("/auth/register")}>
        <Text style={styles.registerText}>
          Don’t have an account? Register
        </Text>
      </TouchableOpacity>
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

  logo: {
    fontSize: 60,
    textAlign: "center",
    marginBottom: 15,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary,
  },

  subtitle: {
    textAlign: "center",
    color: Colors.gray,
    marginTop: 10,
    marginBottom: 40,
    fontSize: 16,
  },

  registerText: {
    textAlign: "center",
    marginTop: 20,
    color: Colors.primary,
    fontWeight: "600",
  },
});