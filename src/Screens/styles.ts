import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    margin: 10,
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "100"
  },
  image: {
    width: 110,
    height: 110
  },
  rightContainer: {
    padding: 10,
    width: "100%",
    flex: 1,
    backgroundColor: "#dbbe93"
  },
  title: {
    fontWeight: "bold",
    fontSize: 12
  },
  price: {}
});

export default styles;