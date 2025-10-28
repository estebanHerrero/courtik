// cree info screen para que me crea una pantalla completa con mapa direccion, servicion y un boton de volver //
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import AppText from "../components/AppText";

export default function InfoScreen() {
  const router = useRouter();

  // Mapa centrado en Buenos Aires (puedes cambiar coordenadas)
  const region = {
    latitude: -34.6037,
    longitude: -58.3816,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      <AppText variant="semibold" style={styles.title}>
        Detalle de la Cancha
      </AppText>

      {/* Mapa */}
      <MapView style={styles.map} region={region}>
        <Marker coordinate={region} title="Cancha de Padel" />
      </MapView>

      <AppText style={styles.infoText}>
        📍 Dirección: Av. Corrientes 1234, Buenos Aires
      </AppText>
      <AppText style={styles.infoText}>
        🕐 Horario: 8:00 - 22:00
      </AppText>
      <AppText style={styles.infoText}>
        💡 Servicios: Estacionamiento, Bar, Duchas
      </AppText>

      {/* Botón Volver */}
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={22} color="#fff" />
        <AppText style={styles.backText}>Volver</AppText>
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
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: "#0B0F14",
  },
  map: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00AEEF",
    paddingVertical: 12,
    justifyContent: "center",
    borderRadius: 25,
    marginTop: 20,
  },
  backText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 6,
  },
});
