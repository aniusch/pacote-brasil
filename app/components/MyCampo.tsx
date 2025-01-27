import { useState } from "react";
import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

type CampoProps = {
  title: string;
  placeholder: string;
  onPress: () => void;
  isPassword?: boolean; // Nova prop para indicar se é um campo de senha
};

const MyCampo: React.FC<CampoProps> = ({
  title,
  placeholder,
  onPress,
  isPassword = false,
}) => {
  const [text, setText] = useState(""); // Estado para armazenar o valor digitado

  return (
    <View style={styles.campo}>
      <Text style={[styles.title, styles.titleTypo]}>{title}</Text>
      <View style={styles.placeholderTextParent}>
        <TextInput
          style={styles.placeholderText}
          value={text}
          onChangeText={setText} // Atualiza o estado com o texto digitado
          placeholder={placeholder}
          placeholderTextColor="#555" // Cor do texto do placeholder
          secureTextEntry={isPassword} // Mascarar texto se for senha
        />
        <TouchableOpacity style={styles.frameChild} onPress={onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleTypo: {
    textAlign: "left",
    color: "#000",
    fontSize: 18,
  },
  title: {
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    marginBottom: 4, // Espaço entre o título e o placeholder
  },
  placeholderText: {
    fontFamily: "Inter-Regular",
    fontSize: 15,
    color: "#000", // Cor do texto digitado
    borderBottomWidth: 1,
    borderColor: "#000", // Linha abaixo do campo de texto
    paddingVertical: 4,
    width: "100%", // Ocupa toda a largura disponível
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  placeholderTextParent: {
    alignSelf: "stretch",
  },
  campo: {
    width: "100%",
    marginVertical: 12,
  },
});

export default MyCampo;
