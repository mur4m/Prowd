import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import axios from "axios";

import MessageBot from "./MessageBot";
import TextField from "./TextField";

export default function App() {
  const [chatHistory, setChatHistory] = useState([]);
  //console.log("chatHistory (before axios call)", chatHistory);

  useEffect(() => {
    fetchItems();
  }, []);

  // CALL TO API
  const fetchItems = async () => {
    if (chatHistory != null) {
      try {
        const result = await axios.post(
          "https://dev.beprowd.fr/webchat-history ",
          {
            auth:
              "53616c7465645f5f30c3fbcab5721e791de5c170251741079bc752ffed341158bbbfa3a8d3e413f32519ab3bdd2d9e73e3d8d9310094281d2aa23537720c3d8dbfcb7d59be889f82e8ccae57e8e7b0af",
            conversation_id: "114548-4542457-142424-452453-webchat",
            type: "get",
            lookback: "2020-12-19T12:57:15Z",
          }
        );
        //console.log("result", result);
        console.log("result.data", result.data);

        setChatHistory(result.data);
        //console.log("chatHistory", chatHistory);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ScrollView>
      {chatHistory.map((item) => (
        <View style={styles.container} key={item.timestamp}>
          {item.type == "user_message" ? (
            <Text style={styles.usermsg}>{item.message}</Text>
          ) : (
            ""
          )}
          {item.type == "bot_message" ? (
            <MessageBot messages={item.message} callback={fetchItems} />
          ) : (
            ""
          )}
          <StatusBar style="auto" />
        </View>
      ))}
      <TextField callback={fetchItems} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingLeft: 200,
    paddingRight: 200,
  },
  usermsg: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "coral",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ddd",
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
});
