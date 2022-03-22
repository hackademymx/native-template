import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import React from "react";

import { useIsFocused } from "@react-navigation/native";

import { miserver } from "../../api";

const ImagenPrincipal = require("../../assets/imagencita.jpg");

const VistaGeneral = ({ navigation }) => {
  const [listaUsuarios, setListaUsuarios] = React.useState([]);

  const isFocused = useIsFocused();

  const [reload, setReload] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (isFocused) {
      traerInformacion();
    }
  }, [isFocused, reload]);

  const traerInformacion = async () => {
    setIsLoading(true);
    try {
      const { data } = await miserver({ method: "GET", url: "/user" });
      setListaUsuarios(data);
    } catch (error) {
      //mostrar mensaje de error: ejemplo
      alert("Ocurrió un error tratando de obtener la información del servidor");
    }
    setIsLoading(false);
  };

  const eliminarElemento = async (id) => {
    try {
      await miserver({ method: "DELETE", url: `user/${id}` });
      setReload(!reload);
      alert("se ha eliminado el usuario con éxito");
    } catch (error) {
      alert("error al tratar de eliminar el usuario");
    }
  };

  if (true) {
    return (
      <View>
        <Text>Hola mundo, estamos trabajando desde otra rama</Text>
      </View>
    );
  }

  return (
    <View>
      <Image style={styles.image} source={ImagenPrincipal} />
      {listaUsuarios.length === 0 ? (
        <View>
          <Text>No hay datos actualmente en la base de datos</Text>
        </View>
      ) : (
        listaUsuarios.map((usuario, idx) => {
          return (
            <View key={`usuario-${idx}`} style={styles.usuario}>
              <Text>{usuario.name}</Text>
              <Text>{usuario.email}</Text>
              <Text>{usuario.age}</Text>
              <TouchableOpacity>
                <Text
                  onPress={() => eliminarElemento(usuario.id)}
                  style={styles.eliminar}
                >
                  Eliminar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  onPress={() =>
                    navigation.navigate("Vista Actualizar", {
                      itemId: usuario.id,
                    })
                  }
                  style={styles.actualizar}
                >
                  Actualizar
                </Text>
              </TouchableOpacity>
            </View>
          );
        })
      )}
      <Button
        title="Crear"
        onPress={() => navigation.navigate("Vista Crear")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
  },
  usuario: {
    display: "flex",
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    backgroundColor: "#fff",
  },
  eliminar: {
    color: "#C12F33",
  },
  actualizar: {
    backgroundColor: "#36B6D0",
    padding: 5,
    color: "#fff",
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default VistaGeneral;
