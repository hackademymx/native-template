import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React from "react";

import axios from "axios";

import { MyContext } from "../../App";

const initialState = {
  name: "",
  email: "",
  age: "",
};

const VistaCrear = () => {
  const [user, setUser] = React.useState(initialState);
  const { postData } = React.useContext(MyContext);

  const ChangeUserInputs = (propiedad, value) => {
    setUser({
      ...user,
      [propiedad]: value,
    });
  };

  const postUser = async () => {
    /*   await axios.post("url-de-destino", user, {
      headers: {
        token: "asldkfjalskdfs",
      },
    }); */

    postData(user);
    setUser(initialState);
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
        value={user.age}
        onChangeText={(text) => ChangeUserInputs("age", text)}
      />

      <Button title="Confirmar" onPress={postUser} />
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

export default VistaCrear;
