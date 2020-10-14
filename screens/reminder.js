import React, { Fragment } from "react";
import { colors } from "../utils";
import { View, Text } from "react-native";
import Screen from "../components/screen";

const Reminder = ({ navigation }) => {
  return (
    <Fragment>
      <Screen backgroundColor={colors[3]} navigation={navigation}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 40, textAlign: "center" }}>
            Appointment Reminder Screen
          </Text>
        </View>
      </Screen>
    </Fragment>
  );
};

export default Reminder;
