import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native";
import { Link } from "expo-router";
import { GStyles } from "@/styles/global";
import MyCampo from "@/app/components/MyCampo";
import MyButton from "@/app/components/MyButton";
import { FIREBASE_DB } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function Pagamento() {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    cep: "",
    endereco: "",
    telefone: "",
    numeroCartao: "",
    titularCartao: "",
    vencimento: "",
    cvv: "",
  });

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      await addDoc(collection(FIREBASE_DB, "pagamentos"), form);
      Alert.alert("Sucesso", "Dados cadastrados com sucesso!");
      setForm({
        nome: "",
        cpf: "",
        cep: "",
        endereco: "",
        telefone: "",
        numeroCartao: "",
        titularCartao: "",
        vencimento: "",
        cvv: "",
      });
    } catch (error) {
      Alert.alert("Erro", "Falha ao salvar os dados.");
      console.error("Erro ao salvar:", error);
    }
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text style={GStyles.sectionTitle}>Dados Cadastrais</Text>
      <View style={styles.listContainer}>
        <MyCampo
          title="Nome Completo"
          placeholder="Insira o seu nome completo"
          value={form.nome}
          onChangeText={(text) => handleChange("nome", text)}
        />
        <MyCampo
          title="CPF"
          placeholder="000.000.000-00"
          value={form.cpf}
          onChangeText={(text) => handleChange("cpf", text)}
        />
        <MyCampo
          title="CEP"
          placeholder="00000-000"
          value={form.cep}
          onChangeText={(text) => handleChange("cep", text)}
        />
        <MyCampo
          title="Endereço"
          placeholder="Av Brasil 199 J - Cuiabá - MT"
          value={form.endereco}
          onChangeText={(text) => handleChange("endereco", text)}
        />
        <MyCampo
          title="Telefone para contato"
          placeholder="(65) 9 9999-9999"
          value={form.telefone}
          onChangeText={(text) => handleChange("telefone", text)}
        />
      </View>

      <Text style={GStyles.sectionTitle}>Cartão de Crédito</Text>
      <View style={styles.listContainer}>
        <MyCampo
          title="Número do Cartão"
          placeholder="**** **** **** ****"
          value={form.numeroCartao}
          onChangeText={(text) => handleChange("numeroCartao", text)}
        />
        <MyCampo
          title="Titular do Cartão"
          placeholder="Pacote Brasil"
          value={form.titularCartao}
          onChangeText={(text) => handleChange("titularCartao", text)}
        />
        <View style={styles.shortListContainer}>
          <View style={styles.shortListItemContainer}>
            <MyCampo
              title="Vencimento"
              placeholder="MM/YY"
              value={form.vencimento}
              onChangeText={(text) => handleChange("vencimento", text)}
            />
          </View>
          <View style={styles.shortListItemContainer}>
            <MyCampo
              title="CVV"
              placeholder="***"
              value={form.cvv}
              onChangeText={(text) => handleChange("cvv", text)}
            />
          </View>
        </View>
      </View>

      <View style={[GStyles.linksContainer, styles.buttonsContainer]}>
        <MyButton text="Continuar" onPress={() => {}} />
        <Link href={".."}>
          <Text style={GStyles.links}>Voltar</Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: "80%",
    alignSelf: "center",
  },
  shortListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
  },
  shortListItemContainer: {
    flex: 1,
  },
  buttonsContainer: {
    alignContent: "center",
    alignSelf: "center",
    padding: 40,
  },
});
