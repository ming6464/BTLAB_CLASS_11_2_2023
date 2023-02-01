import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

import styles from "./App.component.style";
import FormItem from "./components/FormItem";
import Item from "./components/Item";
export default function App() {
  const [arrItem, setArrItem] = useState([]);
  const [isShowForm, setIsShowForm] = useState(false);
  const AddItem = (item) => {
    setArrItem([...arrItem, item]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text}>Nguyễn Gia Minh</Text>
        <Text style={styles.text}>PH25430</Text>
        <Button title="Thêm Mới" onPress={() => setIsShowForm(true)} />
      </View>
      <View style={styles.container2}>
        {isShowForm ? (
          <FormItem AddItem={AddItem} setIsShowForm={setIsShowForm} />
        ) : null}
        <FlatList
          data={arrItem}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
