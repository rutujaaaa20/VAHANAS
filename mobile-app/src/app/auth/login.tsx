import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import InputField from "@/components/ui/InputField";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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

      <PrimaryButton
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    justifyContent: "center",
    padding: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#1E3A8A",
    textAlign: "center",
  },
});