import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import { getData, setImages } from "../store/data";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  payments: getData(state),
});

export const HomeScreen = connect(mapStateToProps, { setImages })(
  ({ navigation, payments, setImages }) => {
    const [field, setField] = useState({ name: "" });
    const handleFieldsChange = (value) => {
      setField((v) => ({
        ...v,
        name: value,
      }));
    };
    const date = new Date();
    const paymentDateMonth = payments.filter((item) => {
      if (date.getMonth() - new Date(item.paymentTime).getMonth() == 1) {
        return item;
      }
    });
    const paymentDateCurrentWeek = payments.filter((item) => {
        if (date.getDate() - new Date(item.paymentTime).getDate() <= 7) {
            return item;
        }
    });
    
    const paymentDateLastWeek = payments.filter((item) => {
        if (date.getDate() - new Date(item.paymentTime).getDate() > 7 &&date.getMonth() - new Date(item.paymentTime).getMonth() <=14 ) {
            return item;
        }
    });
    console.log(paymentDateLastWeek)
    
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="search"
          onChangeText={handleFieldsChange}
          value={field.name}
          style={styles.input}
        />
        <Text style={styles.heading}>Performance</Text>
        <View style={styles.row}>
          <View style={styles.barContainer}>
            <Text style={styles.barHeading}>Current Week</Text>
            <AnimatedCircularProgress
              size={100}
              width={6}
              fill={(paymentDateCurrentWeek.length/payments.length)*100 }
              tintColor="blue"
              onAnimationComplete={() => console.log("onAnimationComplete")}
              backgroundColor="lightgrey"
            >
              {(fill) => <Text>{fill}%</Text>}
            </AnimatedCircularProgress>
          </View>
          <View style={styles.barContainer}>
            <Text style={styles.barHeading}>Last Week</Text>
            <AnimatedCircularProgress
              size={100}
              width={6}
              fill={(paymentDateLastWeek.length/payments.length)*100}
              tintColor="red"
              onAnimationComplete={() => console.log("onAnimationComplete")}
              backgroundColor="lightgrey"
            >
              {(fill) => <Text>{fill}%</Text>}
            </AnimatedCircularProgress>
          </View>
          <View style={styles.barContainer}>
            <Text style={styles.barHeading}>Last Month</Text>
            <AnimatedCircularProgress
              size={100}
              width={6}
              fill={(paymentDateMonth.length / payments.length)*100}
              tintColor="lightgreen"
              onAnimationComplete={() => console.log("onAnimationComplete")}
              backgroundColor="lightgrey"
            >
              {(fill) => <Text>{fill}%</Text>}
            </AnimatedCircularProgress>
          </View>
        </View>

        <Text style={styles.heading}>Transactions</Text>
        <FlatList
          data={payments}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.row}
              onPress={() => {
                navigation.navigate("transaction-screen", { data: item });
              }}
            >
              <View style={styles.imgNameContainer}>
                <Image style={styles.img} source={item.user.avatar} />

                <Text>{item.user.name}</Text>
              </View>
              <View>
                <Text>{item.payment}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  input: {
    borderWidth: 8,
    borderColor: "lightgrey",
    paddingHorizontal: 15,
    paddingVertical: 3,
    fontSize: 14,
  },
  heading: {
    fontSize: 17,
    fontWeight: "bold",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  row: {
    paddingVertical: 13,
    paddingHorizontal: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "justify",
  },
  imgNameContainer: {
    flexDirection: "row",
  },
  img: {
    width: 20,
    height: 20,
    borderRadius: 100,
    marginRight: 10,
  },
  barContainer: {
    flexDirection: "column",
  },
  barHeading: {
    color: "grey",
    marginBottom: 8,
  },
});
