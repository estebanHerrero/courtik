import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

 
  // Estados de los inputs
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [indoor, setIndoor] = useState(true);

  // Estados de foco
  const [isDateFocused, setDateFocused] = useState(false);
  const [isHourFocused, setHourFocused] = useState(false);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image 
          source={require("../assets/logo.png")}  
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerRight}>
          <Ionicons name="person-circle-outline" size={30} color="#0B0F14" style={{ marginRight: 12 }} />
          <Ionicons name="menu" size={28} color="#0B0F14" />
        </View>
      </View>

      {/* FORM */}
      <View style={styles.form}>
        {/* Input Fecha */}
        <View style={[
          styles.inputWrapper,
          { borderColor: isDateFocused ? "#00AEEF" : "#7B94A4" }
        ]}>
          <TextInput
            style={styles.input}
            placeholder="¿Qué día querés jugar?"
            placeholderTextColor="#555"
            value={date}
            onChangeText={setDate}
            onFocus={() => setDateFocused(true)}
            onBlur={() => setDateFocused(false)}
          />
          <Ionicons name="calendar-outline" size={20} color="#00AEEF" style={styles.inputIcon} />
        </View>

        {/* Input Hora */}
        <View style={[
          styles.inputWrapper,
          { borderColor: isHourFocused ? "#00AEEF" : "#7B94A4" }
        ]}>
          <TextInput
            style={styles.input}
            placeholder="¿A qué hora?"
            placeholderTextColor="#555"
            value={hour}
            onChangeText={setHour}
            onFocus={() => setHourFocused(true)}
            onBlur={() => setHourFocused(false)}
          />
          <Ionicons name="time-outline" size={20} color="#00AEEF" style={styles.inputIcon} />
        </View>

        {/* Switch Indoor/Outdoor */}
        <View style={styles.switchWrapper}>
          <Switch 
            value={indoor} 
            onValueChange={setIndoor}
            trackColor={{ false: "#ccc", true: "#00AEEF" }}
            thumbColor="#fff"  
          />
          <Text style={styles.switchLabel}> indoor | outdoor </Text>
        </View>

        {/* Botón Buscar */}
        <TouchableOpacity style={styles.searchBtn}>
          <Text style={styles.searchBtnText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      {/* RESULTS */}
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }}>
        <View style={styles.card}>
          <Image source={require("../assets/test.jpg")} style={styles.cardImage} />
          <Text style={styles.cardTitle}>El guardián Padel</Text>
          <Text style={styles.cardText}>Carrasco 825, Flores</Text>
          <Text style={styles.cardText}>+54 9 11 6974-0825</Text>
          <Text style={styles.cardText}>$15.000 | sintético | indoor | led</Text>
          <TouchableOpacity style={styles.reserveBtn} onPress={() => router.push("/court/1")}>
            <Text style={{ color: "#fff", fontWeight: "500", letterSpacing: 1 }}>Reservar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={28} color="#00AEEF" />
        <Ionicons name="tennisball-outline" size={28} color="#888" />
        <Ionicons name="person-outline" size={28} color="#888" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16, paddingTop: 60 },

  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  logo: { width: 120, height: 60, marginBottom: 8 },
  headerRight: { flexDirection: "row", alignItems: "center" },

  form: { marginBottom: 20 },
  inputWrapper: { 
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: "#fff"
  },
  input: { 
    flex: 1, 
    fontSize: 16,  
    color: "#333",
    paddingVertical: 10
  },
  inputIcon: { marginLeft: 8 },

  switchWrapper: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  switchLabel: { marginLeft: 8, fontSize: 14, color: "#555" },

  searchBtn: { backgroundColor: "#00AEEF", paddingVertical: 14, alignItems: "center", borderRadius: 25 },
  searchBtnText: { color: "#fff", fontWeight: "600", fontSize: 16, letterSpacing: 1 },

  card: { width: 200, borderRadius: 12, borderWidth: 1, borderColor: "#ddd", marginRight: 16, overflow: "hidden", marginTop: 10, paddingBottom: 12 },
  cardImage: { width: "100%", height: 220 },
  cardTitle: { fontWeight: "bold", fontSize: 16, margin: 8, alignItems: "center", justifyContent: "center" },
  cardText: { fontSize: 12, marginHorizontal: 8, marginBottom: 3 },

  reserveBtn: { backgroundColor: "#00AEEF", paddingVertical: 8, margin: 8, borderRadius: 10, alignItems: "center" },
  reserveBtnText: { letterSpacing: 1.5 },

  bottomNav: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 12, borderTopWidth: 1, borderColor: "#eee", marginTop: "auto" },
});