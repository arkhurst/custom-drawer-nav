import React, { Fragment } from "react";
import { View, Text } from "react-native";
import { colors } from "../utils";
import Screen from "../components/screen";

const Contact = ({ navigation }) => {
  return (
    <Fragment>
      <Screen backgroundColor={colors[4]} navigation={navigation}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 40, textAlign: "center" }}>
            Contact Screen
          </Text>
        </View>
      </Screen>
    </Fragment>
  );
};

export default Contact;
