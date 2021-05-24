import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';

import { styles } from './styles';
import symbol from '../../assets/communist-symbol.png'

const ButtomPage: React.FC = () => {
  const [soundEnable, setSoundEnable] = useState(false)
  const soundObject = new Audio.Sound();
  soundObject.loadAsync(require('../../assets/HinoURSS.mp3'))

  async function playSound(){  
      if(soundEnable){
        await soundObject.pauseAsync()
        setSoundEnable(false)
      }else{
        await soundObject.playAsync()
        setSoundEnable(true)
      }
   
  }

  return (
  <View style={styles.container}>
    <Text style={styles.text}>Communist Buttom</Text> 
  
    <View>
      <TouchableOpacity style={styles.buttom} onPress={playSound}>
        <Image source={symbol} style={styles.image}/>
      </TouchableOpacity>
    </View>   
  </View>
  )
}

export default ButtomPage;