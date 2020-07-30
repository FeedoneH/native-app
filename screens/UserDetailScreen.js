import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { ICONS } from "../utils/AVATARS";

export const UserDetailScreen = ({ route }) => {
  const { data } = route.params;

  const buttons = ["Card", "Debt"];
  return (
    <View style={styles.container}>
      <Text style={styles.payment}>{data.payment}</Text>
      <View style={styles.btnContainer}>
        {buttons.map((button) => (
          <TouchableOpacity style={styles.btn}>
            <Image style={styles.icon} source={ICONS[button]} />
            <Text>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <Text style={styles.heading}>Transaction Detail</Text>
      </View>
      <View style={styles.details}>
        <Text>Payment Detail</Text>
        <View style={styles.row}>
          <Text style={styles.info}> {data.paymentTime}</Text>
          <Image style={styles.icon} source={ICONS.info} />
        </View>
      </View>
      <View style={styles.details}>
        <Text>Type</Text>
        <View style={styles.row}>
          <Text style={styles.info}>{data.type}</Text>
          <Image style={styles.icon} source={ICONS.info} />
        </View>
      </View>
      <View style={styles.details}>
        <Text>Pay With</Text>
        <View style={styles.row}>
          <Text style={styles.info}>{data.payWith}</Text>
          <Image style={styles.icon} source={ICONS.info} />
        </View>
      </View>
      <TouchableOpacity style={styles.export}>
        <Image style={styles.icon} source={ICONS.importImg} />
        <Text>Export</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 12,
  },
  payment: {
    fontSize: 30,
    textAlign: "center",
    paddingVertical: 20,
  },
  heading: {
    fontSize: 17,
    fontWeight: "bold",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    marginBottom: 20,
  },
  btnContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    width: "30%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 17,
    fontWeight: "bold",
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    marginHorizontal: 20,
  },
  info: {
    color: "grey",
    marginRight: 10,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  export: {
    marginTop: 20,
    backgroundColor: "lightgrey",
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
});
