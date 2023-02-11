import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  Modal,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import color from "../../contains/color";
color;
const FormItem = (props) => {
  // const [ten, setTen] = useState("");
  // const [moTa, setMoTa] = useState("");
  // const [link, setLink] = useState("");
  var ten, moTa, link;
  const close = () => {
    // setTen("");
    // setLink("");
    // setMoTa("");
    ten = "";
    moTa = "";
    link = "";
    Keyboard.dismiss;
    props.setIsShowForm(false);
  };
  if (!props.isAddItem) {
    ten = props.item.ten;
    moTa = props.item.moTa;
    link = props.item.link;
  }
  return (
    <Modal visible={props.isShowForm} animationType="fade">
      <View>
        <TextInput
          // value={props.isAddItem ? null : props.item.ten}
          placeholder="Tên"
          placeholderTextColor={color.black}
          style={styles.textInput}
          defaultValue={ten}
          onChangeText={(value) => (ten = value)}
        />
        <TextInput
          // value={props.isAddItem ? null : (props.item.moTa)}
          placeholder="Mô Tả"
          placeholderTextColor={color.black}
          style={[styles.textInput, { marginTop: 10, marginBottom: 10 }]}
          defaultValue={moTa}
          onChangeText={(value) => (moTa = value)}
        />
        <TextInput
          // value={props.isAddItem ? null : props.item.link}
          placeholder="Link "
          placeholderTextColor={color.black}
          style={styles.textInput}
          defaultValue={link}
          onChangeText={(value) => (link = value)}
        />
        <View style={styles.containerBtn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              close();
            }}
          >
            <Text style={styles.textBtn}>Huỷ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              if (!props.isAddItem) {
                props.FixItem({ ten, moTa, link });
              } else props.AddItem({ ten, moTa, link });
              close();
            }}
          >
            <Text style={styles.textBtn}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default FormItem;
