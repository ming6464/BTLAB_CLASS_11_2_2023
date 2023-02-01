import { StyleSheet } from "react-native";
import color from "../../contains/color";
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderColor: color.black,
    borderRadius: 10,
    paddingLeft: 10,
    height: 40,
  },
  btn: {
    backgroundColor: "#1ca4d1",
    fontSize: 17,
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: 100,
    alignItems: "center",
  },
  containerBtn: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textBtn: {
    color: "white",
    fontWeight: "bold",
  },
});
export default styles;
