import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import AuthNavigator from "./stack/AuthNavigator";
import MainNavigator from "./stack/MainNavigator";

import { useAuth } from "@/utils/useAuth.hook"; // Assume useAuth is a custom hook for auth state

const RootNavigator: React.FC = () => {
  const { authState } = useAuth(); // This hook determines if the user is logged in

  return (
    <NavigationContainer>
      {authState.isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
