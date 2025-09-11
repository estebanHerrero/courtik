import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts
} from "@expo-google-fonts/montserrat";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet, Text,
  TouchableOpacity, View
} from "react-native";


export default function LoginScreen() {
  const router = useRouter();

  // cargar fuente
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null; // o un componente de carga
  }

  return (
    <>
      <ImageBackground
        source={require("./assets/fondo.png")}
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.2 }} // transparencia
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 24 }}>Hola, bienvenido</Text>
          {/* acá van tus botones */}
        </View>
      </ImageBackground>
      <View style={styles.container}>
        {/* Título */}
        <Text style={styles.title}>Hola,{"\n"}bienvenido</Text>

        {/* Botón Google */}
        <TouchableOpacity style={styles.button} onPress={() => router.push("/home")}>
          <Text style={styles.buttonText}>Ingresar con Google</Text>
          <Image
            source={require("../assets/google.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Botón Apple */}
        <TouchableOpacity style={styles.button} onPress={() => router.push("/home")}>
          <Text style={styles.buttonText}>Ingresar con Apple</Text>
          <AntDesign name="apple1" size={26} color="black" style={styles.iconApple} />
        </TouchableOpacity>

        {/* Registro abajo */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>¿No tenés cuenta?</Text>
          <TouchableOpacity style={styles.circleButton} onPress={() => router.push("/register")}>
            <AntDesign name="arrowright" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "FFFFFF",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "ffffff",
    paddingHorizontal: 0,
  },
  title: {
    fontSize: 40,
    fontFamily: "Montserrat_500Medium",
    color: "#222222",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#7B94A4",
    borderTopRightRadius: 28,
    borderBottomRightRadius: 28,
    paddingHorizontal: 14,
    marginBottom: 16,
    backgroundColor: "#fff",
    elevation: 3,
    width: "54%",
    alignSelf: "flex-start",
    height: 48,
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
  buttonText: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    color: "#9AA0A6",
    fontWeight: "500",
  },
  registerContainer: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    fontSize: 14,
    color: "#444",
    marginRight: 12,
    fontFamily: "Montserrat_400Regular",
  },
  circleButton: {
    backgroundColor: "#00BFFF",
    width: 44,
    height: 44,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});