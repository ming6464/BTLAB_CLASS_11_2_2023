import { StyleSheet } from "react-native";
import color from "../../../contains/color";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: color.background,
    alignContent: "flex-end",
    height: "100%",
    width: "100%",
  },
  text: {
    color: color.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default styles;
