import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { Box, GluestackUIProvider, HStack, Text } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Box
        width="100%"
        height="$full"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Open up App.js to start working on your app!</Text>
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
    </GluestackUIProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fafa",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   text: {
//     color: "#000",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
// });
