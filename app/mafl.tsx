import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export default function Mafl() {
  return (
    <View style={styles.container}>
        <Text style={styles.header1}>Ruční okružní pila</Text>
        <Text style={styles.header2}>Popis nástroje</Text>
        <Text style={styles.text}>Ruční ukružní pila, známá také jako mafl, se typicky skládá z:
        <br></br><FlatList
        data={[
          {key: 'těla s elektrickým motorem'},
          {key: 'kotoučem - různé druhy dle materiálu'},
          {key: 'vodící lišta kolem kotouče - často nastavitelné, s ryskami na konci k přesnému řezu materiálem'},
          {key: 'chrániče kotouče k předcházení úrazů'},
          {key: 'madla ke správnému držení nástroje'},
          {key: 'odvodu pilin a prachu s možností napojení na odsávání'},
        ]}
        renderItem={({ item }) => {
          return (
              <Text style={{ }}>{`\u2022 ${item.key}`}</Text>
          );
        }}
      /></Text>
        
        <Text style={styles.header2}>Účel nástroje</Text>
        <Text style={styles.text}>Z hlediska řezání se jedná o jednu z nejvíce užívaných.

<br></br>Díky řezání kotoučem můžeme jednoduše dosáhnout dlouhých rovných řezů. Zároveň ale může sloužit ke zkracování materiálu a dalším kratším řezům.

<br></br>Navíc, díky nastavitelné hloubce řezu, můžeme materiál řezat do požadované hloubky i ve složitých podmínkách, kdy například chceme proříznout pouze skrze jednu z vrstev do požadované hloubky.</Text>
        <Text style={styles.header2}>Používání a bezpečnost</Text>
      <Text style={styles.text}>About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'flex-start',
    },
    text: {
      color: 'black',
    },
    header1: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#3a2c1f',
        fontSize: 20,
    },
    header2: {
        justifyContent: 'flex-start',
        paddingTop: 10,
        fontSize: 20,
    color: 'black',
    },
    bullet: {
        color: 'black',
    }
  });
  