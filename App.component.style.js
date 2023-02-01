import { StyleSheet } from "react-native";
import color from "./contains/color";
const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 30,
    flex: 1,
    backgroundColor: color.background,
  },
  container1: {
    flex: 1,
  },
  container2: {
    flex: 7,
    marginTop: 10,
    padding: 10,
  },
  text: {
    flex: 1,
    color: color.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    marginTop: 30,
    color: color.black,
    alignItems: "center",
    padding: 10,
    flex: 1,
  },
});

export default styles;
