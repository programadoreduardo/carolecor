import { colors } from "@/constants/colors";
import { Platform, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import { router } from "expo-router";

interface HeaderProps{
    step: string,
    title: string
}

export function Header({step, title}: HeaderProps ) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.row}>
                    <Pressable onPress={()=> router.back()}>
                        <Feather name="arrow-left" size={24} color={'#000'} />
                    </Pressable>
                    <Text style={styles.texto}> {step} <Feather name="loader" size={16} color={"#000"} /></Text>
                </View>
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor: colors.background,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        marginBottom: 14,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! - 5 : 34 
    },
    content: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 34,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
    },
    row: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    texto: {
        fontSize: 18
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.button
    }
})