import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Header } from '@/components/Header';
import Input from '@/components/input';
import { z } from 'zod'
import { TextInputMask } from 'react-native-masked-text'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { colors } from '@/constants/colors';
import { useState } from 'react';
import { router } from 'expo-router';

const schema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  email: z.string().min(1, { message: "O email é obrigatório" }).email({ message: "Email inválido" }),
  password: z.string().min(4, { message: "A senha deve ter pelo menos 5 caracteres" }),
  password2: z.string().min(1, { message: "As senhas não conferem" }),
  telefone: z.string().min(1, { message: "O telefone é obrigatório" }),
}).refine((data) => data.password === data.password2, {
  message: "As senhas não conferem",
  path: ["password2"], // Define o campo que receberá o erro
});

type FormData = z.infer<typeof schema>


export default function CreateUser() {

  const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  })

  function handleCreate(data: FormData) {
    router.push({
      pathname:"/acesso",
      params: data, // Passa os dados do formulário como parâmetros
    })
  }

  return (

    <View style={styles.container}>
      <Header
        step='Voltar a pagina inicial'
        title='vamos começar' />

      <ScrollView style={styles.content}>
        <Text style={styles.label}>Nome</Text>
        <Input
          name='name'
          control={control}
          placeholder='Digite seu nome completo'
          error={errors.name?.message}
          keyboardType='default' />

        <Text style={styles.label}>E-mail</Text>
        <Input
          name='email'
          control={control}
          placeholder='Insira seu endereço de email'
          error={errors.email?.message}
          keyboardType='email-address' />

        <Text style={styles.label}>Crie uma senha</Text>
        <Input
          name='password'
          control={control}
          placeholder='Crie uma senha'
          error={errors.password?.message}
          keyboardType='default' />

        <Text style={styles.label}>Repita a senha</Text>
        <Input
          name='password2'
          control={control}
          placeholder='Repita a senha anterior'
          error={errors.password2?.message}
          keyboardType='default' />

        <Text style={styles.label}>Telefone</Text>
        <Input
          name='telefone'
          control={control}
          placeholder='Ex: (DDD) XXXXX-XXXXX'
          error={errors.telefone?.message}
          keyboardType='numeric' />
      </ScrollView>

      <TouchableOpacity style={styles.button1} onPress={handleSubmit(handleCreate)}>
        <Text style={styles.textButton}> Avançar </Text>
      </TouchableOpacity>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.beige,
    alignItems: 'stretch', // Use stretch para ocupar a largura total,
  },
  content: {
    paddingHorizontal: 16, // Use padding horizontal para responsividade
  },
  label: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    backgroundColor: colors.white,
    fontSize: 14,
    borderRadius: 5,
    marginBottom: 15
  },
  button1: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: colors.button,
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center'
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white'
  }

});
