import { View, Text } from "react-native";
import { Flame } from "lucide-react-native";
import { Colors } from "../../constants/Colors";

interface StreakBadgeProps {
    days: number;
    className?: string;
}

export function StreakBadge({ days, className }: StreakBadgeProps) {
    return (
        <View className={`flex-row items-center bg-orange-100 px-2 py-1 rounded-lg ${className}`}>
            <Flame size={16} color={Colors.warning} fill={Colors.warning} />
            <Text className="text-orange-600 font-bold ml-1 text-xs">{days} Day Streak</Text>
        </View>
    );
}
