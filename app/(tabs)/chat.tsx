import { View, Text, ScrollView, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Send, Image as ImageIcon, Sparkles, FileText, MoreHorizontal } from "lucide-react-native";
import { Colors } from "../../constants/Colors";
import { Card } from "../../components/ui/Card";

export default function ChatScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>
            {/* Header */}
            <View className="flex-row items-center px-4 py-3 border-b border-gray-100">
                <View className="w-10 h-10 bg-green-50 rounded-full items-center justify-center mr-3">
                    <Sparkles size={20} color={Colors.primary} fill={Colors.primary} />
                </View>
                <View className="flex-1">
                    <Text className="text-lg font-bold text-gray-900">Claude AI Coach</Text>
                    <Text className="text-xs text-gray-500">Ask me anything about your diet, progress, or goals.</Text>
                </View>
                <TouchableOpacity className="p-2 bg-gray-50 rounded-full">
                    <MoreHorizontal size={20} color={Colors.textMuted} />
                </TouchableOpacity>
            </View>

            <ScrollView className="flex-1 px-4 bg-gray-50/30" contentContainerStyle={{ paddingVertical: 20 }}>

                {/* Date Divider */}
                <View className="items-center mb-6">
                    <Text className="text-xs font-bold text-gray-400 uppercase">Today, 9:41 AM</Text>
                </View>

                {/* AI Message 1 */}
                <View className="flex-row items-start mb-4">
                    <View className="w-8 h-8 bg-green-50 rounded-full items-center justify-center mr-2 mt-1">
                        <Sparkles size={14} color={Colors.primary} fill={Colors.primary} />
                    </View>
                    <View className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] border border-gray-100">
                        <Text className="text-gray-800 text-base leading-5 mb-3">Nice work staying consistent this week. 🌿</Text>
                        <Text className="text-gray-800 text-base leading-5">I can review your meals, workouts, or health reports and give you clear next steps.</Text>
                    </View>
                </View>

                {/* Action Card (Upload Report) */}
                <View className="items-start mb-6 ml-10">
                    <TouchableOpacity className="bg-green-50 border border-green-100 p-4 rounded-xl flex-row items-center max-w-[85%]">
                        <View className="bg-white p-2 rounded-lg mr-3 shadow-sm">
                            <FileText size={20} color={Colors.primary} />
                        </View>
                        <View className="flex-1">
                            <Text className="font-bold text-gray-900 mb-0.5">Upload report or blood test</Text>
                            <Text className="text-xs text-gray-600">Get a gentle, science-based breakdown of your results.</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* User Message */}
                <View className="flex-row justify-end mb-6">
                    <View className="bg-primary p-4 rounded-2xl rounded-tr-none shadow-sm max-w-[85%]">
                        <Text className="text-white text-base leading-5 font-medium">Can you check if my current diet supports muscle gain and recovery?</Text>
                    </View>
                    {/* User Avatar Placeholder */}
                    <View className="w-8 h-8 bg-gray-200 rounded-full items-center justify-center ml-2 mt-1">
                        <Text className="text-xs font-bold text-gray-500">ME</Text>
                    </View>
                </View>

                {/* AI Message 2 */}
                <View className="flex-row items-start mb-4">
                    <View className="w-8 h-8 bg-green-50 rounded-full items-center justify-center mr-2 mt-1">
                        <Sparkles size={14} color={Colors.primary} fill={Colors.primary} />
                    </View>
                    <View className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] border border-gray-100">
                        <Text className="text-gray-800 text-base leading-5 mb-2">Absolutely. You can send:</Text>
                        <View className="pl-2 mb-3">
                            <Text className="text-gray-800 mb-1">• A photo of your meals</Text>
                            <Text className="text-gray-800 mb-1">• A food log screenshot</Text>
                            <Text className="text-gray-800 mb-1">• A PDF or image of your recent blood test</Text>
                        </View>
                        <Text className="text-gray-800 text-base leading-5">I'll highlight what looks strong and where we can gently improve.</Text>
                    </View>
                </View>

                {/* Suggestion Chips */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4 ml-10 flex-row gap-2">
                    <TouchableOpacity className="bg-white border border-gray-200 px-4 py-2 rounded-full mr-2">
                        <Text className="text-primary font-medium text-sm">Analyze today's meals</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white border border-gray-200 px-4 py-2 rounded-full mr-2">
                        <Text className="text-primary font-medium text-sm">Check progress toward my goal</Text>
                    </TouchableOpacity>
                </ScrollView>

            </ScrollView>

            {/* Input Area */}
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={100}>
                <View className="p-4 bg-white border-t border-gray-100">
                    {/* Upload Button */}
                    <TouchableOpacity className="bg-green-50 py-3 px-4 rounded-xl flex-row items-center justify-center mb-3">
                        <ImageIcon size={20} color={Colors.primary} className="mr-2" />
                        <Text className="text-primary font-bold">Upload health report or photo</Text>
                    </TouchableOpacity>

                    <View className="flex-row items-center">
                        <View className="flex-1 bg-gray-100 rounded-full px-4 py-3 mr-2">
                            <TextInput
                                placeholder="Message Claude..."
                                className="text-gray-900 border-0 p-0 text-base h-full"
                                placeholderTextColor="#9ca3af"
                            />
                        </View>
                        <TouchableOpacity className="w-12 h-12 bg-primary rounded-full items-center justify-center shadow-sm">
                            <Send size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
