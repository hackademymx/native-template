import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

import axios from "axios";

import React from "react";

import { MyContext } from "../../App";

const VistaGeneral = ({ navigation }) => {
  const { usuarios, deleteData } = React.useContext(MyContext);

  React.useEffect(() => {
    traerInformacion();
  }, []);

  const traerInformacion = async () => {
    /*   const response = await axios.get(
            "https://9bea-45-6-63-88.ngrok.io/api/user"
          );
          console.log(response); */
  };

  const eliminarElemento = async (idx) => {
    /* const response = await axios.delete(`url/users/${id}`) */
    deleteData(idx);
  };

  return (
    <View>
      {usuarios.map((usuario, idx) => {
        return (
          <View style={styles.usuario}>
            <Text>{usuario.name}</Text>
            <Text>{usuario.email}</Text>
            <Text>{usuario.age}</Text>
            <TouchableOpacity>
              <Text
                onPress={() => eliminarElemento(idx)}
                style={styles.eliminar}
              >
                Eliminar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                onPress={() =>
                  navigation.navigate("Vista Actualizar", {
                    itemId: idx,
                  })
                }
                style={styles.actualizar}
              >
                Actualizar
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
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
});

export default VistaGeneral;
