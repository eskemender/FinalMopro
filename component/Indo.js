import React,{ Component } from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView } from 'react-native';


class Indonesia extends Component{
  constructor(){
    super();
    this.state={
        DataIndo: [],
        refreshing: false
    }
}
renderItem=({item})=>
  <SafeAreaView>
    <View style={styles.container}>
      
      <View style={styles.box1}><Text>{item.provinsi}</Text></View>
      <View style={styles.box2}><Text>{item.kasusPosi}</Text></View>
      <View style={styles.box3}><Text>{item.kasusSemb}</Text></View>
      <View style={styles.box4}><Text>{item.kasusMeni}</Text></View>
    </View>
  </SafeAreaView>
  
  
onRefresh= () =>{
    this.getDataApi();
}

componentDidMount = () =>{
    this.getDataApi();
}

getDataApi = async () => {
  const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
  const DataIndo = await response.json()
  const { data } = await DataIndo
  this.setState({
      DataIndo: {
          Data: await data,
      }
  })
}

render(){
    if (!this.state.DataIndo) {
        return <Text>Loading...</Text>
    }
    return (
        <View>
          <View>
            <FlatList 
                data={this.state.DataIndo.Data}
                keyExtractor={item => item.fid.toString()}
                renderItem={this.renderItem}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
            />
          </View>
        </View>
        
    )
}
};
export default Indonesia;

const styles = StyleSheet.create({
  returnContainer: {
    flex: 1,
    flexDirection:'row',
    padding:5,
    borderWidth:1,
    backgroundColor: '#EBEBEB',
  },
  container: {
    flex: 1,
    flexDirection:'row',
    padding:5,
    borderWidth:1,
    backgroundColor: 'snow',
  },
  covidContainer:{
    flexDirection:'row',
    marginTop:20,
    marginBottom:15
  },
  text:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:28,
    marginTop:50,
    fontFamily:'sans-serif-light'
  },

  box1:{
    width:160,
    marginBottom:7,
    height:20
  },
  box2:{
    width: 50,
    height: 20,
    alignItems: 'center',
    marginBottom:7,
    backgroundColor:'#ffa500',
    borderRadius: 15,
  },
  box3:{
    width:50,
    height:20,
    alignItems: 'center',
    marginLeft:10,
    marginBottom:7,
    backgroundColor:'#90ee90',
    borderRadius: 15,
  },
  box4:{
    width:50,
    height:20,
    alignItems: 'center',
    marginLeft:10,
    marginBottom:7,
    backgroundColor:'#ed2939',
    borderRadius: 15,
  },

  name:{
    fontSize:20,
    fontWeight: 'bold',
    color: "black",
    alignSelf: 'center',
    margin:25
},
})