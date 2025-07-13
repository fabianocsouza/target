import { router } from "expo-router";
import { StatusBar, View } from "react-native";

import { List } from "@/components/List";
import { Button } from "@/components/Button";
import { Target } from "@/components/Target";
import { HomeHeader } from "@/components/HomeHeader";

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
      <StatusBar barStyle="light-content" />
      <HomeHeader data={summary} />

      <List
        title="Metas"
        data={targets}
        keyExtractor={(item) => item.id}
        containerStyle={{ paddingHorizontal: 24 }}
        emptyMessage="Nenhuma meta. Toque em nova meta para criar."
        renderItem={({ item }) => (
          <Target
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        )}
      />
      <View style={{ padding: 24, paddingBottom: 32 }}>
        <Button title="Nova meta" onPress={() => router.navigate("/target")} />
      </View>
    </View>
  );
}
