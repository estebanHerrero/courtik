import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={require("../assets/logo.png")}  
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
    width: 230, 
    height: 60,
    marginBottom: 6,
  },
  tagline: {
    color: "#00BFFF",
    fontSize: 14,
    letterSpacing: 0.5,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
});