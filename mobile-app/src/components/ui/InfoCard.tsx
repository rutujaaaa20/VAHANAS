import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  route: string;
  status?: string;
};

export default function InfoCard({
  title,
  route,
  status = "Active",
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.route}>Route: {route}</Text>

      <Text
        style={[
          styles.status,
          status === "Active" ? styles.active : styles.inactive,
        ]}
      >
        Status: {status}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },

  route: {
    fontSize: 15,
    color: "#4B5563",
    marginBottom: 8,
  },

  status: {
    fontSize: 14,
    fontWeight: "600",
  },

  active: {
    color: "#10B981",
  },

  inactive: {
    color: "#EF4444",
  },
});