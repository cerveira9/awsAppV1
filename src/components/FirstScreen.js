import React from 'react';
import { Header, Button } from 'react-native-elements';
import { 
  Text,
  View,
  Image
} from 'react-native';

const FirstScreen = () => (
    <View>
        <Header 
          centerComponent={{ text: 'CMM', style: { color: '#fff' } }}
        />
        <View style={styles.container}> 
          <Text style={styles.textStyle}>Cloud Mining</Text>
          <Text style={styles.textStyle2}>Manager</Text>
          <Image
            style={{width: 250, height: 250, paddingTop: 35}}
            source={{uri: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bitcoin-PNG-Image-500x496.png'}}
        />
          <Button
            title='Contratos'
          />
        </View>
    </View>
);

const styles = {
    container: {
      paddingTop: 35,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontSize: 30,
    },
    textStyle2: {
      fontSize: 42,
      fontWeight: 'bold',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    },
  }

export default FirstScreen;