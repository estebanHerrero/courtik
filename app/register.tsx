import AppText from "@/components/AppText";
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function RegisterScreen() {
  const [nombre, setNombre] = useState("");
  const [apodo, setApodo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [focusedInput, setFocusedInput] = useState(null);

  const handleRegister = () => {
    console.log({ nombre, apodo, email, password });
    // lógica de la API para registrar usuario
  };

  const getInputStyle = (fieldName) => [
    styles.input,
    { borderColor: focusedInput === fieldName ? "#00AEEF" : "#7B94A4" }
  ];

  return (
    <View style={styles.container}>
      <AppText variant="medium" style={styles.title}>Crear cuenta</AppText>

      <TextInput
        style={getInputStyle("nombre")}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        onFocus={() => setFocusedInput("nombre")}
        onBlur={() => setFocusedInput(null)}
      />

      <TextInput
        style={getInputStyle("apodo")}
        placeholder="Apodo"
        value={apodo}
        onChangeText={setApodo}
        onFocus={() => setFocusedInput("apodo")}
        onBlur={() => setFocusedInput(null)}
      />

      <TextInput
        style={getInputStyle("email")}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        onFocus={() => setFocusedInput("email")}
        onBlur={() => setFocusedInput(null)}
      />

      <TextInput
        style={getInputStyle("password")}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        onFocus={() => setFocusedInput("password")}
        onBlur={() => setFocusedInput(null)}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <AppText variant="semibold" style={styles.buttonText}>Registrate</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 22,
    color: "#333",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#00BFFF", // celeste estilo Figma
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 14,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    letterSpacing: 1,
  },
});