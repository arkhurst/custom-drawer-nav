import React, { Fragment } from "react";
import { View, Text } from "react-native";
import { colors } from "../utils";
import Screen from "../components/screen";

const Offers = ({ navigation }) => {
  return (
    <Fragment>
      <Screen backgroundColor={colors[2]} navigation={navigation}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 40, textAlign: "center" }}>
            Offers & Loyalty Screen
          </Text>
        </View>
      </Screen>
    </Fragment>
  );
};

export default Offers;
