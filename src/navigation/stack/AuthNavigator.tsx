import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { RegisterScreen } from "../../screens/RegisterScreen";

import { LoginScreen } from "@/screens/LoginScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      {/* Other auth screens */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
