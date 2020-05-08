import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header1 from './component/Header1';
import Header2 from './component/Header2';
import Global from './component/Global';
import Indo from './component/Indo';
import Header3 from './component/Header3';
const App = () => {
  return (
    <View style={styles.container}>
        <View >
          <Header1/>
        </View>
        <View style={styles.boxSub}>
            <Header2/>
            <Global/>
        </View>
        <View style={styles.boxBody}>
        <Header3/>
          <Indo/>
        </View>
    </View>
)
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor:'#EBEBEB',
      alignItems: 'stretch',
      justifyContent: 'center'
  },
  boxHeader: {
      flex: 2,
      alignItems: 'center',
      backgroundColor: 'blue'
  },
  boxSub: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'stretch',
	 	borderWidth: 1,
 		borderColor: '#F44336',
  },
  boxSubBody: {
    flex: 4,
    alignItems: 'center',
    backgroundColor: 'blue'
},
  boxBody: {
      flex: 10
  }
})

export default App;