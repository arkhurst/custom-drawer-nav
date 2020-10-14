import React, { Fragment } from "react";
import { SafeAreaView, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../utils";

const OpenDrawerButton = ({ navigation }) => (
  <AntDesign
    hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
    onPress={() => navigation.openDrawer()}
    name="menufold"
    size={32}
    color="#222"
    style={{ position: "absolute", top: 20, right: 0, padding: 20 }}
  />
);

const Screen = ({ label, backgroundColor, navigation, children }) => {
  return (
    <Fragment>
      <SafeAreaView
        style={{
          backgroundColor,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <OpenDrawerButton navigation={navigation} />

        {children}
      </SafeAreaView>
    </Fragment>
  );
};
export default Screen;
