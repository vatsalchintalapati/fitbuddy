import { View, Text, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bell, Droplets, Sun, CheckCircle, Clock, Utensils, Move } from "lucide-react-native";
import { Svg, Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { Colors } from "../../constants/Colors";
import { Card } from "../../components/ui/Card";
import { ProgressBar } from "../../components/ui/ProgressBar";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
    return (
        <SafeAreaView className="flex-1 bg-gray-50/50" edges={['top']}>
            <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
                {/* Header Section */}
                <View className="flex-row justify-between items-center mt-4 mb-6">
                    <View>
                        <Text className="text-2xl font-bold text-gray-900">Good Morning, Alex</Text>
                        <Text className="text-gray-500">Your garden looks thriving today.</Text>
                    </View>
                    <View className="bg-white p-2 rounded-full shadow-sm border border-gray-100">
                        <Bell size={24} color={Colors.text} />
                    </View>
                </View>

                {/* Quote Card */}
                <View className="bg-primary rounded-2xl p-6 mb-8 shadow-sm">
                    <Text className="text-white text-lg font-bold italic mb-2">
                        "Adopt the pace of nature: her secret is patience."
                    </Text>
                    <Text className="text-green-100 font-medium">— Ralph Waldo Emerson</Text>
                </View>

                {/* Gamification / Level Section */}
                <View className="items-center mb-8">
                    <View className="w-40 h-40 bg-green-50 rounded-full items-center justify-center border-4 border-white shadow-sm mb-4 relative">
                        <View className="w-24 h-24 bg-green-200 rounded-full" />
                        <View className="absolute -bottom-3 bg-primary px-4 py-1 rounded-full border border-white">
                            <Text className="text-white text-sm font-bold">Lvl 12</Text>
                        </View>
                    </View>
                    <Text className="text-2xl font-bold text-primary mb-1">Strong Sapling</Text>
                    <Text className="text-gray-500 text-sm">450 XP to next stage</Text>
                </View>

                {/* Streaks Row */}
                <View className="flex-row gap-4 mb-8">
                    <Card className="flex-1 items-center py-6 border-0 bg-blue-50">
                        <View className="bg-white p-3 rounded-full mb-3 shadow-sm">
                            <Droplets size={24} color="#3b82f6" fill="#3b82f6" />
                        </View>
                        <Text className="text-2xl font-bold text-gray-900">5 Days</Text>
                        <Text className="text-gray-500 text-xs font-medium uppercase tracking-wider">Hydration</Text>
                    </Card>

                    <Card className="flex-1 items-center py-6 border-0 bg-orange-50">
                        <View className="bg-white p-3 rounded-full mb-3 shadow-sm">
                            <Sun size={24} color="#f97316" fill="#f97316" />
                        </View>
                        <Text className="text-2xl font-bold text-gray-900">12 Days</Text>
                        <Text className="text-gray-500 text-xs font-medium uppercase tracking-wider">Movement</Text>
                    </Card>
                </View>

                {/* Insight Card */}
                <View className="bg-green-50 p-4 rounded-xl mb-8 border border-green-100 flex-row gap-3">
                    <View className="bg-primary p-2 rounded-lg h-10 w-10 items-center justify-center">
                        <Text className="text-white font-bold">AI</Text>
                    </View>
                    <View className="flex-1">
                        <Text className="text-primary font-bold text-xs uppercase mb-1">Claude Insight</Text>
                        <Text className="text-gray-700 leading-5">You've hit your protein goal 3 days in a row! Consider adding avocados today for healthy fats.</Text>
                    </View>
                </View>

                {/* Today's Growth (Stats) */}
                <Text className="text-lg font-bold text-gray-900 mb-4">Today's Growth</Text>
                <Card className="mb-4">
                    <View className="flex-row items-center justify-between mb-2">
                        <View className="flex-row items-center gap-3">
                            <View className="bg-green-100 p-2 rounded-lg">
                                <Utensils size={20} color={Colors.primary} />
                            </View>
                            <Text className="font-semibold text-gray-700">Calories</Text>
                        </View>
                        <Text className="font-bold text-gray-900">1,240 / 2,100</Text>
                    </View>
                    <ProgressBar progress={0.6} color="#fb923c" className="bg-orange-100" />
                </Card>

                <Card className="mb-8">
                    <View className="flex-row items-center justify-between mb-2">
                        <View className="flex-row items-center gap-3">
                            <View className="bg-green-100 p-2 rounded-lg">
                                <Move size={20} color={Colors.primary} />
                            </View>
                            <Text className="font-semibold text-gray-700">Steps</Text>
                        </View>
                        <Text className="font-bold text-gray-900">6,540 / 10,000</Text>
                    </View>
                    <ProgressBar progress={0.65} color={Colors.primary} className="bg-green-100" />
                </Card>

                {/* Today's Activity */}
                <View className="flex-row justify-between items-end mb-4">
                    <Text className="text-lg font-bold text-gray-900">Today's Activity</Text>
                    <Text className="text-primary font-bold text-sm">See All</Text>
                </View>

                <Card className="mb-3 flex-row items-center p-4">
                    <View className="bg-green-100 p-3 rounded-xl mr-4">
                        <Move size={24} color={Colors.primary} />
                    </View>
                    <View className="flex-1">
                        <Text className="font-bold text-gray-900">Morning Yoga</Text>
                        <Text className="text-gray-500 text-xs">07:30 AM • 45 mins</Text>
                    </View>
                    <CheckCircle size={24} color={Colors.success} fill="#e8f5e9" />
                </Card>

                <Card className="mb-3 flex-row items-center p-4">
                    <View className="bg-orange-100 p-3 rounded-xl mr-4">
                        <Utensils size={24} color="#f97316" />
                    </View>
                    <View className="flex-1">
                        <Text className="font-bold text-gray-900">Breakfast</Text>
                        <Text className="text-gray-500 text-xs">Oatmeal & Fruits • 420 kcal</Text>
                    </View>
                    <CheckCircle size={24} color={Colors.success} fill="#e8f5e9" />
                </Card>

                <Card className="mb-8 flex-row items-center p-4">
                    <View className="bg-green-100 p-3 rounded-xl mr-4">
                        <Utensils size={24} color={Colors.primary} />
                    </View>
                    <View className="flex-1">
                        <Text className="font-bold text-gray-900">Lunch</Text>
                        <Text className="text-gray-500 text-xs">Grilled Chicken Salad • 550 kcal</Text>
                    </View>
                    <Clock size={24} color={Colors.textMuted} />
                </Card>

                {/* Progress Trend Chart */}
                <Text className="text-lg font-bold text-gray-900 mb-4">Progress Trend</Text>
                <Card className="mb-8 p-6">
                    <View className="flex-row justify-between items-start mb-6">
                        <View>
                            <Text className="text-gray-500 mb-1">Current Weight</Text>
                            <View className="flex-row items-end">
                                <Text className="text-4xl font-bold text-gray-900 mr-1">72.4</Text>
                                <Text className="text-xl text-gray-500 mb-1">kg</Text>
                            </View>
                        </View>
                        <View className="bg-green-100 px-3 py-1 rounded-lg flex-row items-center">
                            <Text className="text-primary font-bold text-sm">↘ 2.1 kg</Text>
                        </View>
                    </View>

                    {/* Simple Bar Chart Placeholder */}
                    <View className="h-40 flex-row items-end justify-between gap-2">
                        {[40, 50, 45, 60, 55, 48, 70].map((h, i) => (
                            <View key={i} className="items-center flex-1">
                                <View className={`w-full rounded-t-lg ${i === 6 ? 'bg-primary' : 'bg-gray-100'}`} style={{ height: `${h}%` }} />
                                <Text className="text-xs text-gray-400 mt-2">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</Text>
                            </View>
                        ))}
                    </View>
                </Card>

                <View className="h-20" />
            </ScrollView>
        </SafeAreaView>
    );
}
