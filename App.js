import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Manager from "./Manager";
import Home from "./src/screens/Home";
import Info from "./src/screens/Info";
import UserList from "./src/screens/UserList";
import Product from "./src/screens/Product";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Manager" component={Manager} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="Products" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
