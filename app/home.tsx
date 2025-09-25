import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import AppText from "../components/AppText";




export default function HomeScreen() {
  const router = useRouter();

  // Estados
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [indoor, setIndoor] = useState(true);

  // Mostrar/ocultar pickers
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

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
        <TouchableOpacity 
          style={[
            styles.inputWrapper, 
            { borderColor: isDateFocused ? "#00AEEF" : "#7B94A4" }
          ]} 
          onPress={() => setShowDatePicker(true)}
          onFocus={() => setDateFocused(true)}
          onBlur={() => setDateFocused(false)}
        >
          <AppText style={{ flex: 1, fontSize: 16, color: date ? "#333" : "#555" }}>
            {date || "¿Qué día querés jugar?"}
          </AppText>
          <Ionicons name="calendar-outline" size={20} color="#00AEEF" style={styles.inputIcon} />
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setDate(selectedDate.toLocaleDateString());
            }}
          />
        )}

        {/* Input Hora */}
        <TouchableOpacity 
          style={[
            styles.inputWrapper, 
            { borderColor: isHourFocused ? "#00AEEF" : "#7B94A4" }
          ]} 
          onPress={() => setShowTimePicker(true)}
          onFocus={() => setHourFocused(true)}
          onBlur={() => setHourFocused(false)}
        >
          <AppText style={{ flex: 1, fontSize: 16, color: hour ? "#333" : "#555" }}>
            {hour || "¿A qué hora?"}
          </AppText>
          <Ionicons name="time-outline" size={20} color="#00AEEF" style={styles.inputIcon} />
        </TouchableOpacity>

        {showTimePicker && (
          <DateTimePicker
            value={new Date()}
            mode="time"
            display="default"
            is24Hour={true}
            onChange={(event, selectedTime) => {
              setShowTimePicker(false);
              if (selectedTime) {
                const h = selectedTime.getHours().toString().padStart(2, "0");
                const m = selectedTime.getMinutes().toString().padStart(2, "0");
                setHour(`${h}:${m}`);
              }
            }}
          />
        )}

        {/* Toggle Indoor/Outdoor */}
        <View style={styles.toggleWrapper}>
          <TouchableOpacity 
            style={[styles.toggleBtn, indoor && styles.toggleBtnActive]} 
            onPress={() => setIndoor(true)}
            >
            <AppText style={indoor ? styles.toggleTextActive : styles.toggleText}>Indoor</AppText>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.toggleBtn, !indoor && styles.toggleBtnActive]} 
            onPress={() => setIndoor(false)}
            >
            <AppText style={!indoor ? styles.toggleTextActive : styles.toggleText}>Outdoor</AppText>
          </TouchableOpacity>
        </View>

        {/* Botón Buscar */}
        <TouchableOpacity style={styles.searchBtn}>
          <AppText variant="semibold" style={styles.searchBtnText}>
            Buscar
          </AppText>
        </TouchableOpacity>
      </View>

      {/* RESULTS (placeholder de carousel futuro) */}
      <View style={{ marginTop: 20 }}>  
        <AppText variant="regular" style={{ fontSize: 16, marginBottom: 10 }}>
          Resultados
        </AppText>
        {/* Aquí irá el carousel con cards de canchas */}
      </View>

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
  searchBtnText: { color: "#fff", fontSize: 18, letterSpacing: 1 },

  bottomNav: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 12, borderTopWidth: 1, borderColor: "#eee", marginTop: "auto" },

  toggleWrapper: {
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: 20,
  borderRadius: 8,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: "#00AEEF"
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#fff"
  },
    toggleBtnActive: {
    backgroundColor: "#00AEEF"
  },
  toggleText: {
    color: "#00AEEF",
    fontSize: 14,
    fontWeight: "500"
  },
  toggleTextActive: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600"
  },

});