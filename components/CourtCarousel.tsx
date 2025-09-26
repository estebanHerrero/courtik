// components/CourtCarousel.tsx
import React from "react";
import { FlatList, View, Image, StyleSheet } from "react-native";
import AppText from "./AppText";

// Lista de canchas con foto, descripción y precio
const courts = [
  {
    id: "1",
    name: "Cancha de Tenis Indoor",
    description: "Superficie sintética, iluminación LED",
    price: "$20/h",
    img: require("../assets/court1.jpg"), // poné tu imagen en assets
  },
  {
    id: "2",
    name: "Cancha de Padel Outdoor",
    description: "Césped artificial, vista al parque",
    price: "$15/h",
    img: require("../assets/court2.jpg"), // poné tu imagen en assets
  },
];

export default function CourtCarousel() {
  return (
    <FlatList
      horizontal
      data={courts}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.img} style={styles.image} />
          <AppText style={styles.title}>{item.name}</AppText>
          <AppText style={styles.desc}>{item.description}</AppText>
          <AppText style={styles.price}>{item.price}</AppText>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: "#f8f8f8",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  desc: {
    fontSize: 13,
    color: "#555",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#00AEEF",
    fontWeight: "600",
  },
});
