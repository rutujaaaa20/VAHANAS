import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  color?: string;
};

export default function PrimaryButton({
  title,
  onPress,
  color = "#2563EB",
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    width: "100%",
    elevation: 3,
    marginBottom: 12,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});