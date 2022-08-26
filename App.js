import React from 'react'
import { extendTheme, NativeBaseProvider, View } from 'native-base'
import AppLoading from 'expo-app-loading'

import {
  useFonts,
  PTSerifCaption_400Regular,
  PTSerifCaption_400Regular_Italic
} from '@expo-google-fonts/pt-serif-caption'
import Container from './src/Container'

export default function App() {

  let [fontsLoaded] = useFonts({
    PTSerifCaption_400Regular,
    PTSerifCaption_400Regular_Italic
  })

  const fontConfig = {
    PTSerifCaption : {
      400 : {
        normal : 'PTSerifCaption_400Regular',
        italic : 'PTSerifCaption_400Regular_Italic'
      }
    }
  }

  const theme = extendTheme({
    fontConfig,
    fonts: {
      heading: 'PTSerifCaption',
      body: 'PTSerifCaption',
      mono: 'PTSerifCaption'
    },
    config: { initialColorMode: 'dark' }
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <View style={{flex: 1}}>
          <Container />
        </View>
      </NativeBaseProvider>
    )
  }
}


