import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, Text, ToastAndroid, View } from "react-native";

import styles from "./App.component.style";
import FormItem from "./components/FormItem";
import Item from "./components/Item";
export default function App() {
  const [arrItem, setArrItem] = useState([]);
  const [isAddItem, setIsAddItem] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);
  const [item1, setItem1] = useState({});
  const AddItem = (item) => {
    setArrItem([...arrItem, item]);
  };
  const HandleSua = (item1) => {
    setItem1(item1);
    setIsAddItem(false);
    setIsShowForm(true);
  };
  const FixItem = (item) => {
    const newList = arrItem.map((iteml) => {
      if (iteml.ten == item.ten) {
        iteml.ten = item.ten;
        iteml.moTa = item.moTa;
        iteml.link = item.link;
      }
      return iteml;
    });
    setArrItem(newList);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text}>Nguyễn Gia Minh</Text>
        <Text style={styles.text}>PH25430</Text>
        <Button
          title="Thêm Mới"
          onPress={() => {
            setIsShowForm(true);
            setIsAddItem(true);
          }}
        />
      </View>
      <View style={styles.container2}>
        <FormItem
          isShowForm={isShowForm}
          setIsShowForm={setIsShowForm}
          isAddItem={isAddItem}
          AddItem={AddItem}
          FixItem={FixItem}
          item={item1}
        />
        <FlatList
          data={arrItem}
          renderItem={({ item }) => (
            <Item item={item} HandleSua={HandleSua} isShowBtn={true} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
