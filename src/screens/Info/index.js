import { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import Item from "../../../components/Item";
import styles from "./styles";

const Info = (props) => {
  const navi = props.navigation;
  const route = props.route;
  const [count, setCount] = useState(0);
  const name = route.params.name;
  const id = route.params.id;
  const [email, setEmail] = useState(""),
    [address, setAddress] = useState("");
  //useEffect(<hàm> , [])
  //1 . <hàm> sẽ được chạy ngay sau khi đã render xong bất kể [] có phần tử hay không
  //2 . nếu [] rỗng thì useEffect đó chỉ chạy được 1 lần, còn khi có phần tử thì useEffect sẽ chạy mỗi khi trong các phần tử đó có thay đổi
  //3 . có thể tạo nhiều useEffect
  useEffect(() => {
    setAddress(" Phú nghĩa, Hà Nội/" + count);
  }, [count % 5 == 0]);
  return (
    <View style={styles.container}>
      {/* <Item
        item={{
          ten: name,
          moTa: "PH25430",
          link: "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/277519151_1433428187089496_6333398984156131861_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0c-Lcw6zrzUAX867gPN&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCUPbUEEn1tkn4x-coYYNMq20faUmYVytwpYrnxa3WTdw&oe=63E4EEE4",
          email: email,
          address: address,
        }}
      /> */}
      <Text style={{ fontSize: 17 }}>Name : {name}</Text>
      <Text style={{ fontSize: 17 }}>id : {id}</Text>
      <Text style={{ fontSize: 17 }}>Email : {count}</Text>
      <Text style={{ fontSize: 17 }}>Address : {address}</Text>
      <Button
        title="Update Email & address"
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </View>
  );
};
export default Info;
