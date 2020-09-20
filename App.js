import React, { useState } from "react";
import { StatusBar,SafeAreaView } from "react-native";

import HomeScreen from "./screens/HomeScreen/index";

const App = () => {
return (
  <>
  <StatusBar barStyle="dark-content"></StatusBar>
  <SafeAreaView>
  <HomeScreen />
  </SafeAreaView>
  </>
)
}

export default App;
