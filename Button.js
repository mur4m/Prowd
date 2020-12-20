import React from "react";
import { StyleSheet, Text, View } from "react-native";

import axios from "axios";

export default function Button({ data, callback }) {
  const iContinue = async (text) => {
    try {
      const result = await axios.post(
        "https://dev.beprowd.fr/webchat-connector",
        {
          auth:
            "53616c7465645f5f30c3fbcab5721e791de5c170251741079bc752ffed341158bbbfa3a8d3e413f32519ab3bdd2d9e73e3d8d9310094281d2aa23537720c3d8dbfcb7d59be889f82e8ccae57e8e7b0af",
          conversation_id: "114548-4542457-142424-452453-webchat",
          text: text,
        }
      );
      callback();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.buttons}>
      <Text style={styles.title}>
        {data.buttons.map((button) =>
          button.type != null ? (
            <Text>{button.title}</Text>
          ) : (
            <Text>{data.title}</Text>
          )
        )}
      </Text>

      <ul style={styles.list}>
        {data.buttons.map((button) =>
          button.type == "web_url" ? (
            <li>
              <a href={button.value}>{button.title}</a>
            </li>
          ) : (
            <li>
              <button onClick={() => iContinue(button.value)}>
                {button.value}
              </button>
            </li>
          )
        )}
      </ul>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#f7f7f7",
    alignSelf: "center",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  title: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#f7f7f7",
    alignSelf: "flex-start",
    textAlign: "center",
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "#99ffcc",
    color: "gray",
    fontSize: 10,
    fontWeight: "bold",
  },
});
