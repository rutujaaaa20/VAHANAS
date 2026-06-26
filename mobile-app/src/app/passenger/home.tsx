import React, { useState } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

import InputField from "@/components/ui/InputField";
import InfoCard from "@/components/ui/InfoCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function PassengerHome() {
  const [searchBus, setSearchBus] = useState("");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Welcome Passenger 👋</Text>

      <Text style={styles.label}>Search Bus</Text>
      <InputField
        placeholder="Enter bus number..."
        value={searchBus}
        onChangeText={setSearchBus}
      />

      <Text style={styles.subHeading}>Nearby Buses</Text>

      <InfoCard
        title="Bus VH101"
        route="College → Station"
        status="Active"
      />

      <PrimaryButton
        title="Track Bus"
        onPress={() => console.log("Track Bus VH101")}
      />

      <InfoCard
        title="Bus VH102"
        route="Hostel → Campus"
        status="Inactive"
      />

      <PrimaryButton
        title="Track Bus"
        onPress={() => console.log("Track Bus VH102")}
      />

      <PrimaryButton
        title="Logout"
        color="#EF4444"
        onPress={() => console.log("Logout")}
      />
    </ScrollView>
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
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
  },
});