import { View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target";
import { List } from "@/components/List";

const summary = {
  total: "R$ 2.680,00",
  input: { label: "Entradas", value: "R$ 6,184.90" },
  output: { label: "Saídas", value: "-R$ 883.65" },
};

const targets = [
  {
    id: "1",
    name: "Apple Watch",
    percentage: "50",
    current: "580,00",
    target: "1.790,00",
  },
  {
    id: "2",
    name: "Comprar uma cadeira ergonômica",
    percentage: "75",
    current: "900,00",
    target: "1.200,00",
  },
  {
    id: "3",
    name: "Fazer uma viagem para o Nova York",
    percentage: "75",
    current: "1.200,00",
    target: "3.000,00",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />

      <List
        title="Metas"
        data={[]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Target data={item} />}
        containerStyle={{ paddingHorizontal: 24 }}
        emptyMessage="Nenhuma meta. Toque em nova meta para criar."
      />
    </View>
  );
}
