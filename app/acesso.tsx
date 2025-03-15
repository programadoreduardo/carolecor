import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/colors'
import { Header } from '@/components/Header'
import { useLocalSearchParams } from 'expo-router'

export default function Acesso() {
const params = useLocalSearchParams()


  return (
    <View style={styles.container}>
        <Header
        step='Voltar a pagina inicial'
        title='Loja'/>
      <Text>Seja bem vindo {params.name} </Text>
      <Text>Seu email é {params.email}</Text>
      <Text> Seu telefone é {params.telefone}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.background
    }
})