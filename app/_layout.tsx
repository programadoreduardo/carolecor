import { Stack } from "expo-router";

export default function RootLayout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="conta"/>
            <Stack.Screen name="criarConta" options={{headerShown: false}}/>
            <Stack.Screen name="acesso" options={{headerShown: false}}/>
        </Stack>
    )
}