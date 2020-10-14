import React, { Fragment } from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = ({ title, onPress, style }) => {
  return (
    <Fragment>
      <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
        <Text style={style}>{title}</Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default Button;
