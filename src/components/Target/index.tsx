import {
  Text,
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

type TargetProps = {
  id?: string;
  name: string;
  percentage: string;
  current: string;
  target: string;
};

type Props = TouchableOpacityProps & {
  data: TargetProps;
};

export function Target({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {data.name}
        </Text>
        <Text style={styles.status}>
          {data.percentage}% • R$ {data.current} de R$ {data.target}
        </Text>
      </View>

      <MaterialIcons name="chevron-right" size={20} />
    </TouchableOpacity>
  );
}
