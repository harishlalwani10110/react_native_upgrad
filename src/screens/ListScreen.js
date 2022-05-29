import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
    { name: "Friend #10" },
  ];
  return (
    <FlatList
      data={friends}
      // element is like  {item: {name: "Friend #1"}, index:0}
      // so rather then using whole element we destructure it to use just item
      renderItem={({ item }) => {
        return <Text style={styles.listStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  listStyle: {
    fontSize: 30,
  },
});

export default ListScreen;
