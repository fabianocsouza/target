import {
  FlatList,
  Text,
  View,
  type FlatListProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";

import { styles } from "./styles";

import { colors } from "@/theme";

import { Separator } from "../Separator";

type Props<T> = FlatListProps<T> & {
  title: string;
  emptyMessage?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export function List<T>({
  title,
  emptyMessage,
  containerStyle,
  data,
  renderItem,
  ...rest
}: Props<T>) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>{emptyMessage}</Text>
        )}
        ItemSeparatorComponent={() => <Separator color={colors.gray[200]} />}
        {...rest}
      />
    </View>
  );
}
