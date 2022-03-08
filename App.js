import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import VistaActualizar from "./views/actualizaVista";
import VistaGeneral from "./views/vistaGeneral";
import VistaCrear from "./views/crearVista";
import VistaEliminar from "./views/eliminarvista";

import React from "react";

const MyNavegacion = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyNavegacion.Navigator>
        <MyNavegacion.Screen name="Vista General" component={VistaGeneral} />
        <MyNavegacion.Screen name="Vista Crear" component={VistaCrear} />
        <MyNavegacion.Screen
          name="Vista Actualizar"
          component={VistaActualizar}
        />
        <MyNavegacion.Screen name="Vista Eliminar" component={VistaEliminar} />
      </MyNavegacion.Navigator>
    </NavigationContainer>
  );
}

