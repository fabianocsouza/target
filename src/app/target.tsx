import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { PageHeader } from "@/components/PageHeader";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function Target() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Meta"
        subTitle="Economize para alcançar sua meta financeira."
      />
      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label="Nome da meta"
          placeholder="Ex: Viagem para praia, Apple Watch"
        />
        <Input label="Valor alvo (R$)" placeholder="0,00" />
        <Button title="Salvar" />
      </View>
    </View>
  );
}
