import { GestureHandlerRootView, Gesture } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
      screenOptions={{
          swipeEnabled: true,
          drawerActiveTintColor: 'white',
          drawerActiveBackgroundColor: '#3a2c1f',
          drawerInactiveTintColor: 'black',
          drawerStyle: {
            backgroundColor: '#d0b58c',
            width: 200,
          },
          drawerLabelStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#946735',
          },
          headerTintColor: '#000000',
        }}
      >
        <Drawer.Screen
          name="uzivatel"
          options={{
            drawerLabel: 'Uživatel',
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
