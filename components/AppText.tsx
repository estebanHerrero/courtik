import React from "react";
import { Text, TextProps } from "react-native";

type Variant = "regular" | "medium" | "semibold" | "bold";

const variantMap: Record<Variant, string> = {
  regular: "Montserrat_400Regular",
  medium: "Montserrat_500Medium",
  semibold: "Montserrat_600SemiBold",
  bold: "Montserrat_700Bold",
};

type AppTextProps = TextProps & {
  variant?: Variant;
};

export default function AppText({ variant = "regular", style, ...props }: AppTextProps) {
  return <Text style={[{ fontFamily: variantMap[variant] }, style]} {...props} />;
}