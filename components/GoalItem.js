import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete}>
        <View>
    <View style={styles.listItem} ><Text>{props.title}</Text></View>
      </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
        margin: 10,
      }
})

export default GoalItem;