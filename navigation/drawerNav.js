import React, { Fragment } from "react";
import { Dimensions, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  GetStartedScreen,
  CatalogueScreen,
  OffersScreens,
  ReminderScreen,
  RatingsScreen,
  ContactScreen,
} from "../screens";
import CustomDrawer from "../components/customDrawer";

const { width } = Dimensions.get("screen");
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <StatusBar hidden />
        <Drawer.Navigator
          initialRouteName={"GetStarted"}
          drawerStyle={{
            backgroundColor: "transparent",
            width: 0,
          }}
          overlayColor="transparent"
          drawerType="permanent"
          drawerContent={(props) => {
            return (
              <CustomDrawer
                navigation={props.navigation}
                routes={props.state.routeNames}
                selectedRoute={props.state.routeNames[props.state.index]}
              />
            );
          }}
        >
          <Drawer.Screen name="Get Started" component={GetStartedScreen} />
          <Drawer.Screen name="Catalog" component={CatalogueScreen} />
          <Drawer.Screen name="Offers" component={OffersScreens} />
          <Drawer.Screen name="Reminder" component={ReminderScreen} />
          <Drawer.Screen name="Ratings" component={RatingsScreen} />
          <Drawer.Screen name="Contact" component={ContactScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Fragment>
  );
};

export default DrawerNavigator;
