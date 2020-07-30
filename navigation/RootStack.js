import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, UserDetailScreen } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowColor: "transparent",
            borderWidth: 0,
          },
        }}
      >
        <Screen
          options={{
            headerTitle: "Transactions",
            headerTitleStyle: {
              fontSize: 28,
            },
          }}
          name="home-screen"
          component={HomeScreen}
        />
        <Screen
          options={({ navigation, route }) => ({
           title: route.params.data.user.name,
            
          })}
          name="transaction-screen"
          component={UserDetailScreen}
        />
      </Navigator>
    </NavigationContainer>
  );
};
