import { View, Text, TextInput, StyleSheet, Button } from "react-native";

import React from "react";

import { miserver } from "../../api";

const initialState = {
  name: "",
  email: "",
  age: "",
};

const VistaActualizar = ({ route, navigation }) => {
  const [user, setUser] = React.useState(initialState);
  const [loading, setLoading] = React.useState(false);
  const { itemId } = route.params;

  const ChangeUserInputs = (propiedad, value) => {
    setUser({
      ...user,
      [propiedad]: value,
    });
  };

  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const { data } = await  miserver({method: 'GET', url:`/user/${itemId}`});
      setUser(data);
    } catch (error) {
      alert("ocurrió un error tratando de obtener la información del usuario");
    }
  };

  const PUTDATA = async () => {
    try {
      setLoading(true);
      await  miserver({method: 'PUT', url: `user/${itemId}`, data: user}); 
      navigation.goBack();
    } catch (error) {
      alert("ocurrió un error tratando de actualizar el usuario");
    }
    setLoading(false);
  };

  return (
    <View>
      <Text>Nombre</Text>
      <TextInput
        style={styles.textInput}
        value={user.name}
        onChangeText={(text) => ChangeUserInputs("name", text)}
      />
      <Text>Email</Text>
      <TextInput
        style={styles.textInput}
        value={user.email}
        onChangeText={(text) => ChangeUserInputs("email", text)}
      />
      <Text>Edad</Text>
      <TextInput
        style={styles.textInput}
        value={user.age.toString()}
        onChangeText={(text) => ChangeUserInputs("age", text)}
      />

      <Button
        title={loading ? "Cargando..." : "Actualizar"}
        onPress={PUTDATA}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 1,
    borderColor: "#f4f4f4",
  },
});

export default VistaActualizar;
