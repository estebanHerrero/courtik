import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={require("../assets/logo.png")}  // 👈 exportá de Figma
        style={styles.logo}
        resizeMode="contain"
      />
      
      {/* Tagline */}
      <Text style={styles.tagline}>Pádel sin vueltas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#0B0F14", 
  },
  logo: {
    width: 180, // ajustá según tamaño
    height: 60,
    marginBottom: 8,
  },
  tagline: {
    color: "#00BFFF",
    fontSize: 14,
    letterSpacing: 0.5,
  },
});