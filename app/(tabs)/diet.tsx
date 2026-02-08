import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Copy, ScanLine, Plus, ChevronDown, Flame } from "lucide-react-native";
import { Colors } from "../../constants/Colors";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { ProgressBar } from "../../components/ui/ProgressBar";

export default function DietScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>
            <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View className="flex-row justify-between items-center mt-4 mb-6">
                    <Text className="text-2xl font-bold text-gray-900">Diet Plan</Text>
                    <View className="flex-row items-center">
                        <Text className="text-primary font-bold mr-1">Today</Text>
                        <ChevronDown size={20} color={Colors.primary} />
                    </View>
                </View>

                {/* Calorie Summary Card */}
                <Card className="mb-6 p-5 border shadow-sm">
                    <View className="bg-green-50 self-start px-3 py-1 rounded-full flex-row items-center mb-4">
                        <Flame size={14} color={Colors.warning} fill={Colors.warning} />
                        <Text className="text-green-800 text-xs font-bold ml-1">5 Day Streak! Keep it up!</Text>
                    </View>

                    <View className="flex-row justify-between items-end mb-6">
                        <View>
                            <Text className="text-4xl font-bold text-gray-900">1,450</Text>
                            <Text className="text-gray-400 font-medium">Eaten</Text>
                        </View>
                        <View className="items-end">
                            <Text className="text-4xl font-bold text-gray-400">2,200</Text>
                            <Text className="text-gray-400 font-medium">Goal</Text>
                        </View>
                    </View>

                    {/* Macros */}
                    <View className="flex-row gap-2">
                        <View className="flex-1">
                            <View className="flex-row justify-between mb-1">
                                <Text className="text-xs font-bold text-gray-700">Protein</Text>
                                <Text className="text-xs text-gray-500">90/140g</Text>
                            </View>
                            <ProgressBar progress={0.64} color="#3b82f6" height={6} />
                        </View>
                        <View className="flex-1">
                            <View className="flex-row justify-between mb-1">
                                <Text className="text-xs font-bold text-gray-700">Carbs</Text>
                                <Text className="text-xs text-gray-500">120/200g</Text>
                            </View>
                            <ProgressBar progress={0.6} color="#10b981" height={6} />
                        </View>
                        <View className="flex-1">
                            <View className="flex-row justify-between mb-1">
                                <Text className="text-xs font-bold text-gray-700">Fat</Text>
                                <Text className="text-xs text-gray-500">45/65g</Text>
                            </View>
                            <ProgressBar progress={0.69} color="#f59e0b" height={6} />
                        </View>
                    </View>
                </Card>

                {/* Action Buttons */}
                <View className="flex-row gap-4 mb-8">
                    <Button
                        title="Copy Yesterday"
                        variant="secondary"
                        className="flex-1 bg-green-50"
                        textClassName="text-gray-700"
                        icon={<Copy size={18} color="#374151" />}
                    />
                    <Button
                        title="Scan Meal"
                        variant="secondary"
                        className="flex-1 bg-green-50"
                        textClassName="text-gray-700"
                        icon={<ScanLine size={18} color="#374151" />}
                    />
                </View>

                {/* Meals List */}

                {/* Breakfast */}
                <View className="flex-row justify-between items-center mb-4 bg-gray-50 p-2 rounded-lg">
                    <Text className="text-lg font-bold text-gray-900">Breakfast</Text>
                    <Text className="text-gray-500 font-medium">450 kcal</Text>
                </View>

                <View className="mb-6 pl-2">
                    <View className="flex-row justify-between items-start mb-4 border-b border-gray-100 pb-3">
                        <View>
                            <Text className="text-base font-bold text-gray-800">Oatmeal & Berries</Text>
                            <Text className="text-gray-400 text-xs mt-1">45g C • 12g P • 6g F</Text>
                        </View>
                        <Text className="text-primary font-bold">320</Text>
                    </View>
                    <View className="flex-row justify-between items-start mb-2 border-b border-gray-100 pb-3">
                        <View>
                            <Text className="text-base font-bold text-gray-800">Black Coffee</Text>
                            <Text className="text-gray-400 text-xs mt-1">0g C • 0g P • 0g F</Text>
                        </View>
                        <Text className="text-primary font-bold">5</Text>
                    </View>
                    <Button
                        title="Add Food"
                        variant="ghost"
                        className="self-start pl-0"
                        textClassName="text-primary"
                        icon={<Plus size={20} color={Colors.primary} />}
                    />
                </View>

                {/* Lunch */}
                <View className="flex-row justify-between items-center mb-4 bg-gray-50 p-2 rounded-lg">
                    <Text className="text-lg font-bold text-gray-900">Lunch</Text>
                    <Text className="text-gray-500 font-medium">620 kcal</Text>
                </View>

                <View className="mb-6 pl-2">
                    <View className="flex-row justify-between items-start mb-2 border-b border-gray-100 pb-3">
                        <View>
                            <Text className="text-base font-bold text-gray-800">Grilled Chicken Salad</Text>
                            <Text className="text-gray-400 text-xs mt-1">12g C • 45g P • 18g F</Text>
                        </View>
                        <Text className="text-primary font-bold">480</Text>
                    </View>
                    <Button
                        title="Add Food"
                        variant="ghost"
                        className="self-start pl-0"
                        textClassName="text-primary"
                        icon={<Plus size={20} color={Colors.primary} />}
                    />
                </View>

                {/* Dinner */}
                <View className="flex-row justify-between items-center mb-4 bg-gray-50 p-2 rounded-lg">
                    <Text className="text-lg font-bold text-gray-900">Dinner</Text>
                    <Text className="text-gray-500 font-medium">0 kcal</Text>
                </View>

                <View className="mb-8 pl-2">
                    <Button
                        title="Add Food"
                        variant="ghost"
                        className="self-start pl-0"
                        textClassName="text-primary"
                        icon={<Plus size={20} color={Colors.primary} />}
                    />
                </View>

                <View className="h-20" />
            </ScrollView>
        </SafeAreaView>
    );
}
