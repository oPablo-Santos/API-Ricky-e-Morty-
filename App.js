import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import api from "./src/services/Api";
import Cards from "./src/components/Cards";
import Background from "./src/components/Background";

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await api.get("/character");
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Background />
        <View style={styles.body}>
          <FlatList
            data={characters}
            renderItem={({ item }) => <Cards character={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginVertical: 5,
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "45%",
  },
});
