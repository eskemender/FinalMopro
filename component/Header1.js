import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>{"\n"}Data COVID-19 Global & Indonesia{"\n"}</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
}
export default Header;