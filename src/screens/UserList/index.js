import { FlatList, View } from "react-native";
import Item from "../../../components/Item";

const UserList = () => {
  const data = [
    {
      id: 1,
      name: "Hoàng",
      moTa: "PH123456",
      link: "https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-mot-minh-3.jpg",
    },
    {
      id: 2,
      name: "Hương",
      moTa: "PH123111",
      link: "https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-mot-minh-3.jpg",
    },
    {
      id: 3,
      name: "Vanh",
      moTa: "PH123000",
      link: "https://akinavn.vn/wp-content/uploads/2020/07/hinh-anh-buon-mot-minh-3.jpg",
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default UserList;
