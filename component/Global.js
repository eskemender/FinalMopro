import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

class Global extends React.Component{
    constructor(){
        super();
        this.state = {
            api: [],
            positif: '',
            meninggal: '',
            sembuh: '',
        }
    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        const response = await fetch('https://covid19.mathdro.id/api');
        const json = await response.json();
        this.setState({positif: json.confirmed.value})
        this.setState({sembuh: json.recovered.value})
        this.setState({meninggal: json.deaths.value})
    }
   
    render(){
        return (
                   <View style={styles.container}>
                   <View style={styles.boxPositif}>
                       <Text style={styles.text}> Positif {"\n"}{this.state.positif}</Text>
                   </View>
                   <View style={styles.boxSembuh}>
                       <Text style={styles.text}> Sembuh {"\n"}{this.state.sembuh}</Text>
                   </View>
                   <View style={styles.boxMeninggal}>
                   <Text style={styles.text}> Meninggal {"\n"}{this.state.meninggal}</Text>
                   </View>
               </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'relative'
    },
    boxPositif: {
        width: 100,
        height: 100,
        backgroundColor: '#ffa500',
        borderRadius: 15,
        justifyContent: 'space-around',
        alignItems:'center',
    },
    boxSembuh: {
        width: 100,
        height: 100,
        backgroundColor: '#90ee90',
        borderRadius: 15,
        justifyContent: 'space-around',
        alignItems:'center',
    },
    boxMeninggal: {
        width: 100,
        height: 100,
        backgroundColor: '#ed2939',
        borderRadius: 15,
        justifyContent: 'space-around',
        alignItems:'center',
    },
    text: {
        color: 'black',
        alignItems: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    }
})


export default Global;