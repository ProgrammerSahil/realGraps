import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View style={styles.container}>
      
      <ImageBackground style={styles.image} source={{uri: 'https://i.pinimg.com/736x/b6/e8/ee/b6e8eec8c3af2542b80e87cbe38dd597.jpg'}} resizeMode='cover'>
      <View style={styles.overlay}>
          <Text style={styles.heading}>Real Graps</Text>

        <Link href={'/hangmanvdaniels'} asChild><Pressable>
          <Text>Hangman vs daniels</Text>
          </Pressable></Link>

        </View>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  heading:{
    fontSize:70,
    color:'white',
    textAlign:'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 10,
    fontWeight: 'bold',
    paddingTop:40
  },
  container:{
    flex: 1,
    flexDirection: 'column',
  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height:'100%'
  },
})
export default App