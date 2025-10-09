import React, { useState } from "react"; //  NUEVO useState
import AppText from "@/components/AppText";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput, //  NUEVO: inputs
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();

  //  Estados para guardar los datos ingresados por el usuario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Cargar fuentes antes de renderizar
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return null;

  // Función que maneja el login manual
  const handleLogin = () => {
    console.log("Usuario:", email, "Contraseña:", password);
    // Acá se haría la validación real (API o base de datos)
    router.replace("/home"); // redirige al Home tras iniciar sesión
  };

  return (
    <>
      {/* Fondo tenue */}
      <Image
        source={require("../assets/paleta.png")}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "100%",
          height: "100%",
          resizeMode: "contain",
          opacity: 0.08,
        }}
      />

      <View style={styles.container}>
        {/*  Título principal */}
        <AppText variant="regular" style={styles.title}>
          Hola,{"\n"}Bienvenido
        </AppText>

        {/* Campos de usuario y contraseña */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#777"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#777"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Botón para iniciar sesión manualmente */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <AppText style={styles.loginButtonText}>Iniciar sesión</AppText>
          </TouchableOpacity>
        </View>

        {/*  Botón para ingresar con Google */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/home")}
        >
          <AppText variant="regular" style={styles.buttonText}>
            Ingresar con Google
          </AppText>
          <Image
            source={require("../assets/google.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/*  Solo visible en iOS: Apple Login */}
        {Platform.OS === "ios" && (
          <TouchableOpacity
            style={[styles.button, styles.appleButton]}
            onPress={() => console.log("Login con Apple")}
          >
            <AppText variant="regular" style={styles.buttonText}>
              Ingresar con Apple
            </AppText>
            <AntDesign name="apple1" size={24} style={styles.iconApple} />
          </TouchableOpacity>
        )}

        {/* Sección inferior: registro */}
        <View style={styles.registerContainer}>
          <AppText style={styles.registerText}>¿No tenés cuenta?</AppText>
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => router.push("/register")}
          >
            <AntDesign name="arrowright" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },

  title: {
    fontSize: 40,
    fontFamily: "Montserrat_400Regular",
    color: "#222222",
    marginBottom: 20,
    paddingHorizontal: 20,
  },

  // 🟢 NUEVO: Formulario de inputs
  formContainer: {
    marginBottom: 25,
    alignItems: "center",
  },

  input: {
    width: "80%",
    height: 48,
    borderColor: "#7B94A4",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 12,
    fontFamily: "Montserrat_400Regular",
    color: "#333",
    backgroundColor: "#fff",
  },

  loginButton: {
    backgroundColor: "#00BFFF",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 3,
    width: "80%",
    alignItems: "center",
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
  },

  // Botón de Google / Apple (base)
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#7B94A4",
    borderRadius: 28,
    paddingHorizontal: 14,
    marginBottom: 16,
    backgroundColor: "#fff",
    elevation: 3,
    width: "60%",
    height: 48,
    marginLeft: 20,
  },

  icon: {
    width: 24,
    height: 24,
    marginLeft: 12,
    resizeMode: "contain",
  },

  iconApple: {
    marginLeft: 12,
  },

  appleButton: {
    backgroundColor: "#000",
  },

  buttonText: {
    fontSize: 16,
    color: "#444",
  },

  // 🔹 Sección inferior con registro
  registerContainer: {
    position: "absolute",
    bottom: 0,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  registerText: {
    fontSize: 14,
    paddingBottom: 14,
    color: "#444",
    marginRight: 12,
    fontFamily: "Montserrat_400Regular",
  },

  circleButton: {
    backgroundColor: "#00BFFF",
    width: 48,
    paddingBottom: 14,
    height: 68,
    borderTopRightRadius: 28,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    elevation: 3,
  },
});
