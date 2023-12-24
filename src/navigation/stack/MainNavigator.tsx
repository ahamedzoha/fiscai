import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { DetailsScreen } from "@/screens/DetailsScreen";
import { HomeScreen } from "@/screens/HomeScreen";
// Import other main app screens

const Stack = createNativeStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      {/* Other main app screens */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
