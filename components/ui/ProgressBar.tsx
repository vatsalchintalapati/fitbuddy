import { View } from "react-native";

interface ProgressBarProps {
    progress: number; // 0 to 1
    color?: string;
    className?: string;
    height?: number;
}

export function ProgressBar({ progress, color = "#4dae50", className, height = 8 }: ProgressBarProps) {
    const percentage = Math.min(Math.max(progress, 0), 1) * 100;

    return (
        <View className={`bg-gray-200 rounded-full overflow-hidden ${className}`} style={{ height }}>
            <View
                className="h-full rounded-full"
                style={{ width: `${percentage}%`, backgroundColor: color }}
            />
        </View>
    );
}
