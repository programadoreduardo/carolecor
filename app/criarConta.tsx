import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
} from 'react-native';
import { colors } from '@/constants/colors';
import { router } from 'expo-router';


export default function CreateUser() {


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.button1}> Vamos criar a sua conta</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  logo: {
    marginTop: 50, // Ajuste para garantir espaço no topo
    width: 200, // Ajuste conforme necessário
    height: 100, // Ajuste conforme necessário
    resizeMode: 'contain',
  },
  button1: {
    marginTop: 450,
    padding: 10,
    backgroundColor: colors.button,
    width: '90%',
    alignItems: 'center',
    borderRadius: 10
  },
  button2: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.button,
    width: '90%',
    alignItems: 'center',
    borderRadius: 10
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white'
  }

});
