import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>
      {/* En el futuro: inputs para nombre, etc */}
      <Button title="Registrarte" onPress={() => router.replace("/home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, marginBottom: 20 }
});