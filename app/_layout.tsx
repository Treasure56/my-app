import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {routes.map((route) => (
        <Stack.Screen
          key={route}
          name={route}
          options={{
            headerShown: false,
            animation: "fade_from_bottom"
          }}
        />
      ))}
    </Stack>
  );
}

const routes = ["index", "home", "task"];
