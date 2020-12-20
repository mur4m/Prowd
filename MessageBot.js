import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "./Button";
export default function MessageBot({ messages, callback }) {
  return (
    <View>
      {messages.map((msg) =>
        msg.type == "text" ? (
          <Text style={styles.botmsg}>{msg.content}</Text>
        ) : (
          <Button data={msg.content} callback={callback} />
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  botmsg: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#99ffcc",
    alignSelf: "flex-start",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#f7f7f7",
    color: "gray",
    fontSize: 10,
    fontWeight: "bold",
  },
});
