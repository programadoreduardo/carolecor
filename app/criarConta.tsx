import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { Header } from '@/components/Header';


export default function CreateUser() {


  return (

    <View style={styles.container}>
      <Header 
      step='Voltar a pagina inicial'
      title='vamos começar'/>

      
     {/*  <Image source={require('../assets/images/logoSemFundo.png')} style={styles.logo} /> */}

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    marginTop: 20
  }


});
