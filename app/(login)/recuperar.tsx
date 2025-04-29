import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import MyButton from '@/components/MyButton';
import MyCampo from '@/components/MyCampo';
import TextLink from '@/components/TextLink';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function Recuperar() {
  const [email, setEmail] = useState('');

  return (
    <KeyboardAvoidingView
      style={[styles.container, { flex: 1 }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <View style={[styles.formContainer, { gap: 16 }]}>
        <Text style={{ fontSize: 28, fontWeight: '700', textAlign: 'center' }}>
          Recuperar Senha
        </Text>
        <MyCampo
          title={'Email'}
          placeholder={'Insira o seu email aqui'}
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>
          Um email de recuperação será enviado para a sua conta
        </Text>
      </View>
      <Link dismissTo href='/' asChild>
        <MyButton text={'Recuperar senha'} onPress={() => {}} />
      </Link>
      <View>
        <Link dismissTo href='/' asChild>
          <TextLink text={'Possuo cadastro'} onPress={() => {}} />
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
    gap: 32,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    width: '100%',
    gap: 4,
  },
});
