import React, { Fragment } from "react";
import { colors } from "../utils";
import { View, Text } from "react-native";
import Screen from "../components/screen";

const Ratings = ({ navigation }) => {
  return (
    <Fragment>
      <Screen backgroundColor={colors[4]} navigation={navigation}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 40, textAlign: "center" }}>
            Rate & Review Screen
          </Text>
        </View>
      </Screen>
    </Fragment>
  );
};

export default Ratings;
