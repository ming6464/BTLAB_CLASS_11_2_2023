import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import db from "../../../db.json";
const Product = (props) => {
  const navi = props.navigation;
  const [listData, setListData] = useState([]);
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/ming6464/eaf01d61c071931bce7b83a4d013f990/raw/bf9b39c89aeef7bbabe3da64792833b0f17a2182/test.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setListData(data.products);
      });
  }, []);

  const RenderItem = (item) => {
    return (
      <>
        <Text>id : {item.id}</Text>
        <Text>name : {item.name}</Text>
        <Text>desc : {item.desc}</Text>
        <Text>price : {item.price}</Text>
        <Text>sale_price : {item.sale_price}</Text>
        <Text>state : {item.status}</Text>
      </>
    );
  };
  return (
    <View>
      <FlatList
        data={listData}
        renderItem={({ item }) => RenderItem(item)}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default Product;
