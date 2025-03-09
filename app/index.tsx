import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { colors } from '@/constants/colors';
import { Link, router } from 'expo-router';


export default function HomeScreen() {
  function conta() {
    router.push('/conta')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={colors.background} />
      <View style={styles.container}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />

        <View style={styles.buttonsView}>

        <Link href={'/criarConta'} asChild>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.textButton}>Criar conta </Text>
          </TouchableOpacity>
        </Link>


        <Link href={'/conta'} asChild>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.textButton}> Já Tenho conta</Text>
          </TouchableOpacity>
        </Link>

        </View>
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
    justifyContent: 'space-between'
  },
  logo: {
    marginTop: 50, // Ajuste para garantir espaço no topo
    width: 200, // Ajuste conforme necessário
    height: 100, // Ajuste conforme necessário
    resizeMode: 'contain',
  },
  buttonsView:{
    width: '100%',
    alignItems: 'center',
    paddingBottom: 30
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
