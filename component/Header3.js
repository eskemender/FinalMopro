import React from 'react';
import { View, Text, Image} from 'react-native';

const Greeting = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>{"\n"}Indonesia{"\n"}</Text>
            <Text style={{fontSize: 15, textAlign: 'right', alignSelf: 'stretch'}}>Positif Sembuh Meninggal   </Text>
        </View>

    );
};


const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
}
export default Greeting;