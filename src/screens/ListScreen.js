import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1" , age:"12"},
    { name: "Friend #2" , age:"13"},
    { name: "Friend #3" , age:"14"},
    { name: "Friend #4" , age:"15"},
    { name: "Friend #5" , age:"16"},
    { name: "Friend #6" , age:"17"},
    { name: "Friend #7" , age:"18"},
    { name: "Friend #8" , age:"19"},
    { name: "Friend #9" , age:"22"},
    { name: "Friend #10", age:"23" },
  ];
  return (
    <FlatList
      // horizontal -- Our list will be displayed horizontal
    //   horizontal
    //   showsHorizontalScrollIndicator={true}
      keyExtractor={(friend) => friend.name}
      data={friends}
      // element is like  {item: {name: "Friend #1"}, index:0}
      // so rather then using whole element we destructure it to use just item
      renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.name} - Age : { item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    fontSize: 30,
  },
});

export default ListScreen;
