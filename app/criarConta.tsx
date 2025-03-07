import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import { Header } from '@/components/Header';
import Input from '@/components/input';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { colors } from '@/constants/colors';

const schema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  email: z.string().min(1, { message: "O email é obrigatório" }),
  password: z.string().min(1, { message: "A senha é obrigatório" }),
  password2: z.string().min(1, { message: "As senhas não conferem" }),
  telefone: z.string().min(1, { message: "O telefone é obrigatório" })
})

type FormData = z.infer<typeof schema>


export default function CreateUser() {

  const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

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
  }

});
