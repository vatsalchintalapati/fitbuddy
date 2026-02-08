import { Tabs } from "expo-router";
import { Chrome as Home, Utensils, Dumbbell, MessageSquare, User } from "lucide-react-native";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "#4dae50", headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Today",
                    tabBarIcon: ({ color }) => <Home size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="diet"
                options={{
                    title: "Diet",
                    tabBarIcon: ({ color }) => <Utensils size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="workout"
                options={{
                    title: "Workout",
                    tabBarIcon: ({ color }) => <Dumbbell size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: "Chat",
                    tabBarIcon: ({ color }) => <MessageSquare size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => <User size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}
