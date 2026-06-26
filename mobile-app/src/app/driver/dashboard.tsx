import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function DriverDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Driver 👋</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Bus Number</Text>
        <Text style={styles.value}>VH101</Text>

        <Text style={styles.label}>Route</Text>
        <Text style={styles.value}>College → Station</Text>

        <Text style={styles.label}>Trip Status</Text>
        <Text style={styles.status}>Inactive</Text>
      </View>

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.buttonText}>Start Trip</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.stopButton}>
        <Text style={styles.buttonText}>Stop Trip</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
    color: "#0F172A",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
    marginBottom: 25,
    elevation: 4,
  },
  label: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },
  status: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#EF4444",
    marginTop: 4,
  },
  startButton: {
    backgroundColor: "#10B981",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  stopButton: {
    backgroundColor: "#F59E0B",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  logoutButton: {
    backgroundColor: "#EF4444",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});