import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TrackBus() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Track Bus 🚌</Text>

      <View style={styles.mapBox}>
        <Text style={styles.mapText}>MAP PLACEHOLDER</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Bus Number</Text>
        <Text style={styles.value}>VH101</Text>

        <Text style={styles.label}>Route</Text>
        <Text style={styles.value}>College → Station</Text>

        <Text style={styles.label}>Status</Text>
        <Text style={styles.running}>Running</Text>

        <Text style={styles.label}>ETA</Text>
        <Text style={styles.value}>12 mins</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Refresh</Text>
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
  },
  mapBox: {
    height: 250,
    backgroundColor: "#CBD5E1",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  mapText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#334155",
  },
  infoCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 4,
  },
  label: {
    color: "#64748B",
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
  },
  running: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#10B981",
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});