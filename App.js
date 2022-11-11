import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenBai01 from "./component/Bai01";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: () => (
              <Image
                style={styles.menu}
                source={{
                  uri: "https://res.cloudinary.com/dpux6zwj3/image/upload/v1668135521/Avata/icon-menu_nhhwzl.png",
                }}
              />
            ),
            headerRight: () => (
              <Image
                style={styles.menu}
                source={{
                  uri: "https://res.cloudinary.com/dpux6zwj3/image/upload/v1668135521/Avata/icon-search_v194cj.png",
                }}
              />
            ),
          }}
          component={ScreenBai01}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    width: 24,
    height: 24,
  },
});
