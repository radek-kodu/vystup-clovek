import React from "react";
import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>KUTILNA se nebude zabývat pouze konečnými výrobky, jako většina aplikací v tomto odvětví, ale především se bude soustředit na problematiku správného užívání materiálů a nástrojů, díky tomu bude uživateli nechána volná ruka a bude spíše nasměrován jak a kdy použít zmíněné prostředky.
<br></br><br></br>
Na konci celého projektu by tak měla vzniknout jednoduchá mobilní aplikace, ve které uživatelé naleznou především přehled materiálů pro řemeslnou výrobu, jejich vlastnosti a ideální použití v různých scénářích. A zároveň zde naleznou návody na základní nástroje, jak ruční, tak elektrické, které jsou běžné používány ke zpracování těchto materiálů. Především u elektrických nástrojů je jejich správný způsob užívání klíčový k předcházení závažných zranění, ke kterým v praxi běžně dochází.</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
    alignItems: 'center',
    padding: 20,
  },
});
