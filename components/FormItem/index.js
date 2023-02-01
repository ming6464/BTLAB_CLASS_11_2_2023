import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import color from "../../contains/color";
color;
const FormItem = (props) => {
  const [ten, setTen] = useState("");
  const [moTa, setMoTa] = useState("");
  const [link, setLink] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Tên"
        placeholderTextColor={color.black}
        style={styles.textInput}
        defaultValue={ten}
        onChangeText={(value) => setTen(value)}
      />
      <TextInput
        placeholder="Mô Tả"
        placeholderTextColor={color.black}
        style={[styles.textInput, { marginTop: 10, marginBottom: 10 }]}
        defaultValue={moTa}
        onChangeText={(value) => setMoTa(value)}
      />
      <TextInput
        placeholder="Link "
        placeholderTextColor={color.black}
        style={styles.textInput}
        defaultValue={link}
        onChangeText={(value) => setLink(value)}
      />
      <View style={styles.containerBtn}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            props.setIsShowForm(false);
            Keyboard.dismiss;
          }}
        >
          <Text style={styles.textBtn}>Huỷ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            Keyboard.dismiss;
            props.AddItem({ ten, moTa, link });
            setTen("");
            setLink("");
            setMoTa("");
          }}
        >
          <Text style={styles.textBtn}>Lưu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default FormItem;
