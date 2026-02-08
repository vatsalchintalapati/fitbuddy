import { View, ViewProps } from "react-native";


export type CardProps = ViewProps & {
    className?: string;
};

export function Card({ style, className, children, ...props }: CardProps) {
    return (
        <View
            className={`bg-white rounded-2xl p-4 shadow-sm border border-gray-100 ${className}`}
            style={style}
            {...props}
        >
            {children}
        </View>
    );
}
