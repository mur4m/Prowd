import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

import axios from "axios";

export default function TextField({ callback }) {
  const [userChat, setUserChat] = useState("");

  const handleSubmit = async (val) => {
    console.log(val);
    try {
      const result = await axios.post(
        "https://dev.beprowd.fr/webchat-connector",
        {
          auth:
            "53616c7465645f5f30c3fbcab5721e791de5c170251741079bc752ffed341158bbbfa3a8d3e413f32519ab3bdd2d9e73e3d8d9310094281d2aa23537720c3d8dbfcb7d59be889f82e8ccae57e8e7b0af",
          conversation_id: "114548-4542457-142424-452453-webchat",
          text: val,
        }
      );
      callback();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TextInput
      placeholder="Saisissez votre texte puis entrer pour envoyer"
      style={styles.input}
      value={userChat}
      onChangeText={(text) => setUserChat(text)}
      onSubmitEditing={() => {
        handleSubmit(userChat);
      }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#dbd9d9",
    borderWidth: 4,
    borderColor: "gray",
    paddingVertical: 15,
    textAlign: "center",
  },
});
