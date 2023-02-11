import { Button, first, View, Pressable, Text } from "react-native";
const Home = (props) => {
  //   const navi = props.navigation;
  //   const ChangeScreen = (name, data = {}) => {
  //     return (
  //       <Pressable onPress={() => navi.navigate(name, data)}>
  //         <Text>{name}</Text>
  //       </Pressable>
  //     );
  //   };
  //   return (
  //     <View>
  //       {ChangeScreen("Manager")}
  //       {ChangeScreen("Info", { ten: "TEN SV TRUYEN SANG" })}
  //       {ChangeScreen("UserList")}
  //       {/* {RenderChangeScreen(["Manager", "Info", "UserList"])} */}
  //     </View>
  //   );
  const navigation = props.navigation;

  const chuyenMH = (tenMH, data = {}) => {
    // navigation.navigate('Tên màn hình', dữ liệu dạng object);
    navigation.navigate(tenMH, data);
  };

  return (
    <View>
      <Text>Trang chủ</Text>
      <Pressable
        onPress={() =>
          chuyenMH("Info", { name: "TEN SV TRUYEN SANG", id: "PH12345" })
        }
      >
        <Text>Sang MH Thông tin</Text>
      </Pressable>
      <Pressable onPress={() => chuyenMH("UserList", { title: "Sản phẩm" })}>
        <Text>Sang MH Danh sách</Text>
      </Pressable>
      <Pressable onPress={() => chuyenMH("Products")}>
        <Text>Sang MH products</Text>
      </Pressable>
    </View>
  );
};
export default Home;
