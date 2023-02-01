import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 8,
    borderColor: color.black,
    borderWidth: 2,
    height: 60,
    paddingTop: 5,
    paddingBottom: 5,
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
});
export default styles;
