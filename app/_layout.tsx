import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="uzivatel"
          options={{
            drawerLabel: 'Uzivatel',
            title: 'Uzivatel',
          }}
        />
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'KUTILNA',
            title: 'KUTILNA',
          }}
        />
        <Drawer.Screen
          name="nastroje"
          options={{
            drawerLabel: 'Nástroje',
            title: 'Nástroje',
          }}
        />
        <Drawer.Screen
          name="materialy"
          options={{
            drawerLabel: 'Materiály',
            title: 'Materiály',
          }}
        />
        <Drawer.Screen
          name="oblibene"
          options={{
            drawerLabel: 'Oblíbené',
            title: 'Oblíbené',
          }}
        />

      </Drawer>
    </GestureHandlerRootView>
  );
}
