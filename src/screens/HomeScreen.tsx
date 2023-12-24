import { HStack, Text, Box } from "@gluestack-ui/themed";
import React from "react";

export const HomeScreen = () => {
  return (
    <Box
      width="100%"
      height="$full"
      justifyContent="center"
      alignItems="center"
    >
      <Text>Home Page</Text>
      <HStack backgroundColor="$amber300" space="lg" reversed={false}>
        <Box
          onTouchStart={() => {
            console.log("touched");
          }}
          w="$20"
          h="$20"
          bg="$blue300"
        />
        <Box w="$20" h="$20" bg="$blue400" />
        <Box w="$20" h="$20" bg="$blue500" />
      </HStack>
    </Box>
  );
};
