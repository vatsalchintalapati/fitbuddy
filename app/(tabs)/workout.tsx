import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Plus, Play, Calendar, Clock, Trophy } from "lucide-react-native";
import { Colors } from "../../constants/Colors";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

export default function WorkoutScreen() {
    const weekDays = [
        { day: "M", date: "21", active: false },
        { day: "T", date: "22", active: false },
        { day: "W", date: "23", active: false },
        { day: "T", date: "24", active: true },
        { day: "F", date: "25", active: false },
        { day: "S", date: "26", active: false },
        { day: "S", date: "27", active: false },
    ];

    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>
            <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View className="flex-row justify-between items-center mt-4 mb-6">
                    <Text className="text-2xl font-bold text-gray-900">Workout</Text>
                    <TouchableOpacity className="p-2 bg-gray-50 rounded-full">
                        <Calendar size={24} color={Colors.primary} />
                    </TouchableOpacity>
                </View>

                {/* Weekly Calendar Strip */}
                <View className="flex-row justify-between mb-8">
                    {weekDays.map((item, index) => (
                        <View key={index} className={`items-center px-3 py-4 rounded-2xl ${item.active ? 'bg-primary' : 'bg-gray-50'}`}>
                            <Text className={`text-xs font-medium mb-1 ${item.active ? 'text-white' : 'text-gray-400'}`}>{item.day}</Text>
                            <Text className={`text-lg font-bold ${item.active ? 'text-white' : 'text-gray-900'}`}>{item.date}</Text>
                        </View>
                    ))}
                </View>

                {/* Today's Target */}
                <Card className="mb-6 bg-blue-50 border-blue-100">
                    <View className="flex-row items-center mb-4">
                        <View className="bg-blue-100 p-2 rounded-full mr-3">
                            <Trophy size={20} color="#3b82f6" fill="#3b82f6" />
                        </View>
                        <View>
                            <Text className="text-blue-900 font-bold text-lg">Daily Goal</Text>
                            <Text className="text-blue-600/80 text-sm">Keep your streak alive!</Text>
                        </View>
                    </View>
                    <View className="flex-row justify-between items-center">
                        <View className="items-center flex-1 border-r border-blue-200">
                            <Text className="text-2xl font-bold text-blue-900">45</Text>
                            <Text className="text-xs text-blue-600 font-bold uppercase">Minutes</Text>
                        </View>
                        <View className="items-center flex-1">
                            <Text className="text-2xl font-bold text-blue-900">350</Text>
                            <Text className="text-xs text-blue-600 font-bold uppercase">Calories</Text>
                        </View>
                    </View>
                </Card>

                {/* Workouts List */}
                <Text className="text-lg font-bold text-gray-900 mb-4">Available Workouts</Text>

                {/* Card 1 */}
                <Card className="mb-4 p-0 overflow-hidden">
                    <View className="h-32 bg-gray-200 relative">
                        <View className="absolute inset-0 bg-black/20 flex-row items-center justify-center">
                            <Play size={40} color="white" fill="white" />
                        </View>
                        <View className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded">
                            <Text className="text-xs font-bold text-gray-900">High Intensity</Text>
                        </View>
                    </View>
                    <View className="p-4 flex-row justify-between items-center">
                        <View>
                            <Text className="font-bold text-lg text-gray-900">Full Body HIIT</Text>
                            <View className="flex-row items-center mt-1">
                                <Clock size={14} color="#6b7280" />
                                <Text className="text-gray-500 text-xs ml-1 mr-3">30 min</Text>
                                <Text className="text-red-500 text-xs font-bold">Hard</Text>
                            </View>
                        </View>
                        <Button title="Start" size="sm" className="px-6" />
                    </View>
                </Card>

                {/* Card 2 */}
                <Card className="mb-4 p-0 overflow-hidden">
                    <View className="h-32 bg-gray-200 relative">
                        <View className="absolute inset-0 bg-black/20 flex-row items-center justify-center">
                            <Play size={40} color="white" fill="white" />
                        </View>
                        <View className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded">
                            <Text className="text-xs font-bold text-gray-900">Strength</Text>
                        </View>
                    </View>
                    <View className="p-4 flex-row justify-between items-center">
                        <View>
                            <Text className="font-bold text-lg text-gray-900">Upper Body Power</Text>
                            <View className="flex-row items-center mt-1">
                                <Clock size={14} color="#6b7280" />
                                <Text className="text-gray-500 text-xs ml-1 mr-3">45 min</Text>
                                <Text className="text-orange-500 text-xs font-bold">Medium</Text>
                            </View>
                        </View>
                        <Button title="Start" size="sm" className="px-6" />
                    </View>
                </Card>

                <Button
                    title="Create Custom Workout"
                    variant="outline"
                    className="mt-2 mb-8 border-dashed border-2"
                    icon={<Plus size={20} color={Colors.primary} />}
                />

                <View className="h-20" />
            </ScrollView>
        </SafeAreaView>
    );
}
