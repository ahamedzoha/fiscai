import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { GluestackUIProvider } from "@gluestack-ui/themed";

import RootNavigator from "@/navigation/RootNavigator";
import { AuthProvider } from "@/utils/useAuth.hook";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </GluestackUIProvider>
  );
}
