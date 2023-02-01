import { first, View, Image, Text, ToastAndroid } from "react-native";
import React from "react";
import styles from "./styles";
const Item = (props) => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgAvatar}
        source={{
          uri: String(item.link),
        }}
      />
      <View style={styles.inf}>
        <Text style={styles.text}>Tên : {item.ten}</Text>
        <Text style={styles.text}>Mô Tả : {item.moTa}</Text>
      </View>
    </View>
  );
};
export default Item;
