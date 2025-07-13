import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 10,
  },
  label: {
    fontSize: 12,
    fontFamily: fontFamily.medium,
    color: colors.gray[600],
  },
  input: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.black,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: colors.gray[400],
  },
});
