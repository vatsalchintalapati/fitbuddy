import { TouchableOpacity, Text, TouchableOpacityProps, ActivityIndicator } from "react-native";

import { Colors } from "../../constants/Colors";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    className?: string;
    textClassName?: string;
    icon?: React.ReactNode;
}

export function Button({
    title,
    variant = "primary",
    size = "md",
    loading = false,
    className,
    textClassName,
    icon,
    disabled,
    ...props
}: ButtonProps) {
    const getBaseStyle = () => {
        switch (variant) {
            case "primary":
                return "bg-primary";
            case "secondary":
                return "bg-secondary";
            case "outline":
                return "bg-transparent border border-primary";
            case "ghost":
                return "bg-transparent";
            default:
                return "bg-primary";
        }
    };

    const getTextStyle = () => {
        switch (variant) {
            case "primary":
                return "text-white font-bold";
            case "secondary":
                return "text-primary font-bold";
            case "outline":
                return "text-primary font-medium";
            case "ghost":
                return "text-gray-600 font-medium";
            default:
                return "text-white font-bold";
        }
    };

    const getSizeStyle = () => {
        switch (size) {
            case "sm":
                return "py-2 px-3";
            case "md":
                return "py-3 px-6";
            case "lg":
                return "py-4 px-8";
            default:
                return "py-3 px-6";
        }
    };

    return (
        <TouchableOpacity
            className={`rounded-full flex-row items-center justify-center ${getBaseStyle()} ${getSizeStyle()} ${disabled || loading ? "opacity-50" : ""
                } ${className}`}
            disabled={disabled || loading}
            activeOpacity={0.8}
            {...props}
        >
            {loading ? (
                <ActivityIndicator color={variant === "primary" ? "white" : Colors.primary} className="mr-2" />
            ) : icon ? (
                <>{icon}</>
            ) : null}
            <Text className={`${getTextStyle()} text-center ${icon ? "ml-2" : ""} ${textClassName}`}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
