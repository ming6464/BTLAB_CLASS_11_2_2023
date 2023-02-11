import {
  first,
  View,
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./styles";
const Item = (props) => {
  const { item, HandleSua, isShowBtn } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgAvatar}
        source={{
          uri: String(item.link),
        }}
      />
      <View style={styles.inf}>
        <Text style={styles.text}>Name : {item.ten}</Text>
        <Text style={styles.text}>Desc : {item.moTa}</Text>
        <Text style={styles.text}>Email : {item.email}</Text>
        <Text style={styles.text}>Address : {item.address}</Text>
      </View>
      {isShowBtn ? (
        <View style={styles.groupBtn}>
          <TouchableOpacity
            style={[styles.btn, { marginBottom: 5 }]}
            onPress={() => {}}
          >
            <Text>Xoá</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { marginTop: 5 }]}
            onPress={() => {
              HandleSua(item);
            }}
          >
            <Text>Sửa</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
export default Item;
