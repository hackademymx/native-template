import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import VistaActualizar from "./views/actualizaVista";
import VistaGeneral from "./views/vistaGeneral";
import VistaCrear from "./views/crearVista";
import VistaEliminar from "./views/eliminarvista";
import { Suspense } from 'react'
import { View, Text } from 'react-native';



const VistaGeneralOptimizada = React.lazy(() => import('./views/vistaGeneral'));

const MyNavegacion = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Suspense fallback={() => <View><Text>loading...</Text></View>}>
      <MyNavegacion.Navigator>
        <MyNavegacion.Screen name="Vista General" component={VistaGeneralOptimizada} />
        <MyNavegacion.Screen name="Vista Crear" component={VistaCrear} />
        <MyNavegacion.Screen
          name="Vista Actualizar"
          component={VistaActualizar}
        />
        <MyNavegacion.Screen name="Vista Eliminar" component={VistaEliminar} />
      </MyNavegacion.Navigator>
      </Suspense>
      
    </NavigationContainer>
  );
}

