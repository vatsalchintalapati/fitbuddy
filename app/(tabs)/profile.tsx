import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Settings, Plus, Footprints, Timer, Flame } from "lucide-react-native";
import { Colors } from "../../constants/Colors";
import { Card } from "../../components/ui/Card";

export default function ProfileScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>
            <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View className="items-center mt-6 mb-8">
                    <View className="w-24 h-24 bg-gray-200 rounded-full mb-4 border-4 border-white shadow-sm relative">
                        {/* Avatar Placeholder */}
                        <View className="w-full h-full rounded-full bg-blue-100 overflow-hidden items-center justify-center">
                            <Text className="text-2xl">👩🏽</Text>
                        </View>
                        <View className="absolute bottom-0 right-0 bg-primary p-1.5 rounded-full border-2 border-white">
                            <Settings size={14} color="white" />
                        </View>
                    </View>
                    <Text className="text-2xl font-bold text-gray-900">Priya Sharma</Text>
                    <Text className="text-gray-500 text-sm mt-1">🌱 Growing since Jan 2023</Text>
                </View>

                {/* Stats Grid */}
                <View className="flex-row justify-between gap-3 mb-8">
                    <Card className="flex-1 items-center py-4 border-gray-100">
                        <Text className="text-green-600 font-bold text-xl">-5.2kg</Text>
                        <Text className="text-gray-400 text-[10px] font-bold uppercase mt-1">Weight Lost</Text>
                    </Card>
                    <Card className="flex-1 items-center py-4 border-gray-100">
                        <Text className="text-green-600 font-bold text-xl">48</Text>
                        <Text className="text-gray-400 text-[10px] font-bold uppercase mt-1">Workouts</Text>
                    </Card>
                    <Card className="flex-1 items-center py-4 border-gray-100">
                        <Text className="text-green-600 font-bold text-xl">12%</Text>
                        <Text className="text-gray-400 text-[10px] font-bold uppercase mt-1">Body Fat</Text>
                    </Card>
                </View>

                {/* Progress Photos */}
                <View className="flex-row justify-between items-end mb-4">
                    <Text className="text-lg font-bold text-gray-900">Progress Photos</Text>
                    <Text className="text-primary font-bold text-sm">View All</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-3 mb-8 -mx-4 px-4">
                    <TouchableOpacity className="w-32 h-44 bg-white border-2 border-dashed border-gray-200 rounded-xl items-center justify-center mr-3">
                        <Plus size={32} color={Colors.textMuted} />
                        <Text className="text-gray-400 font-medium mt-2">Add Photo</Text>
                    </TouchableOpacity>

                    <View className="w-32 h-44 bg-gray-300 rounded-xl overflow-hidden mr-3 relative">
                        <View className="absolute inset-0 bg-black/40 items-center justify-end pb-3">
                            <Text className="text-white font-bold text-xs bg-black/50 px-2 py-0.5 rounded">Jan 10</Text>
                        </View>
                    </View>

                    <View className="w-32 h-44 bg-gray-300 rounded-xl overflow-hidden mr-3 relative">
                        <View className="absolute inset-0 bg-black/40 items-center justify-end pb-3">
                            <Text className="text-white font-bold text-xs bg-black/50 px-2 py-0.5 rounded">Today</Text>
                        </View>
                    </View>
                </ScrollView>

                {/* Community Circle */}
                <Text className="text-lg font-bold text-gray-900 mb-4">Community Circle</Text>
                <View className="bg-white rounded-2xl border border-gray-100 mb-8 p-1">
                    <View className="flex-row items-center p-3 border-b border-gray-100">
                        <View className="w-10 h-10 bg-blue-100 rounded-full mr-3 items-center justify-center">
                            <Text>👨🏻‍🦰</Text>
                        </View>
                        <View className="flex-1">
                            <Text className="font-bold text-gray-900">Alex Chen</Text>
                            <Text className="text-gray-500 text-xs">Completed 5k run today</Text>
                        </View>
                        <View className="bg-orange-100 px-2 py-1 rounded-full flex-row items-center">
                            <Flame size={12} color="#f97316" fill="#f97316" />
                            <Text className="text-orange-600 font-bold text-xs ml-1">12</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center p-3">
                        <View className="w-10 h-10 bg-yellow-100 rounded-full mr-3 items-center justify-center">
                            <Text>👩🏾</Text>
                        </View>
                        <View className="flex-1">
                            <Text className="font-bold text-gray-900">Sarah Jones</Text>
                            <Text className="text-gray-500 text-xs">Hit a PR!</Text>
                        </View>
                        <View className="bg-orange-100 px-2 py-1 rounded-full flex-row items-center">
                            <Flame size={12} color="#f97316" fill="#f97316" />
                            <Text className="text-orange-600 font-bold text-xs ml-1">5</Text>
                        </View>
                    </View>
                </View>

                {/* Lifetime Records */}
                <Text className="text-lg font-bold text-gray-900 mb-4">Lifetime Records</Text>
                <Card className="flex-row items-center justify-between mb-3 px-4 py-4">
                    <View className="flex-row items-center">
                        <View className="bg-green-100 p-2.5 rounded-xl mr-3">
                            <Footprints size={20} color={Colors.primary} />
                        </View>
                        <View>
                            <Text className="font-bold text-gray-900">Steps in a Day</Text>
                            <Text className="text-gray-500 text-xs">March 12, 2023</Text>
                        </View>
                    </View>
                    <Text className="text-xl font-bold text-gray-900">24,302</Text>
                </Card>
                <Card className="flex-row items-center justify-between mb-8 px-4 py-4">
                    <View className="flex-row items-center">
                        <View className="bg-green-100 p-2.5 rounded-xl mr-3">
                            <Timer size={20} color={Colors.primary} />
                        </View>
                        <View>
                            <Text className="font-bold text-gray-900">Longest Plank</Text>
                            <Text className="text-gray-500 text-xs">Feb 20, 2023</Text>
                        </View>
                    </View>
                    <Text className="text-xl font-bold text-gray-900">3m 12s</Text>
                </Card>

                <View className="h-24" />
            </ScrollView>
        </SafeAreaView>
    );
}
