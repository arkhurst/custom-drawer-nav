import React, { Fragment } from "react";
import { colors } from "../utils";
import Screen from "../components/screen";
import { View, Text } from "react-native";

const GetStarted = ({ navigation }) => {
  return (
    <Fragment>
      <Screen
        backgroundColor={colors[0]}
        label={"Get Started Screen"}
        navigation={navigation}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 40, textAlign: "center" }}>
            Get Started Screen
          </Text>
        </View>
      </Screen>
    </Fragment>
  );
};

export default GetStarted;
