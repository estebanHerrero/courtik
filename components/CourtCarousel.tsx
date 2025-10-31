// components/CourtCarousel.tsx
import { FlatList, View, Image, StyleSheet } from "react-native";
import AppText from "./AppText";

const data = [
  { id: "1", name: "Cancha 1", img: require("../assets/court1.jpg") },
  { id: "2", name: "Cancha 2", img: require("../assets/court2.jpg") },
];

export default function CourtCarousel() {
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.img} style={styles.image} />
          <AppText style={styles.name}>{item.name}</AppText>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { marginRight: 12, width: 160 },
  image: { width: "100%", height: 100, borderRadius: 10 },
  name: { marginTop: 6, textAlign: "center" },
});
