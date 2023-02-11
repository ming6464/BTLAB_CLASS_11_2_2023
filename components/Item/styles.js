import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 8,
    borderColor: color.black,
    borderWidth: 2,
    height: 100,
    padding: 5,
    marginBottom: 10,
  },
  imgAvatar: {
    flex: 1,
    height: "100%",
    resizeMode: "contain",
  },
  inf: {
    flex: 4,
  },
  text: {
    flex: 1,
    color: color.black,
    fontSize: 20,
  },
  groupBtn: {
    flex: 1,
  },
  btn: {
    flex: 1,
    backgroundColor: "#1ca4d1",
    borderRadius: 5,
    alignItems: "center",
  },
});
export default styles;
