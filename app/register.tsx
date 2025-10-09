import AppText from "@/components/AppText";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// agrego para redirigir
import { useRouter } from "expo-router"; // agreegado nuevo de redirigir 

export default function RegisterScreen() {
  //campos de formmulario 
  const router = useRouter(); // agregado nuevo para iniciar el redireccionamiento 
  const [nombre, setNombre] = useState("");
  const [apodo, setApodo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); //esto controla si se va a mostrar la contraseña 

  const [focusedInput, setFocusedInput] = useState(null);

  const handleRegister = () => {   // esto es lo que maneja el registro del usuario
    console.log({ nombre, apodo, email, password });
    // lógica de la API para registrar usuario
    router.replace("/login"); // agregado nuevo -- aca cuando el registro termina redirige al login
  };

  const getInputStyle = (fieldName) => [
    styles.input,
    { borderColor: focusedInput === fieldName ? "#00AEEF" : "#7B94A4" },
  ];

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <AppText variant="medium" style={styles.title}>
        Crear cuenta
      </AppText>

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

      {/* Contraseña con ojo 👁️ */}
      <View
        style={[
          getInputStyle("password"),
          { flexDirection: "row", alignItems: "center", paddingVertical: 10 },
        ]}
      >
        <TextInput
          style={{ flex: 1, fontSize: 16, paddingVertical: 0 }}
          placeholder="Contraseña"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          onFocus={() => setFocusedInput("password")}
          onBlur={() => setFocusedInput(null)}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="#00AEEF"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <AppText variant="semibold" style={styles.buttonText}>
          Registrate
        </AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  logo: {
    width: 120,
    height: 60,
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    color: "#333",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#00BFFF",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 1,
  },
});