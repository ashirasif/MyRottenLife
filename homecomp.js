
import React from "react";
import {
    StyleSheet,
    View,
    TextInput,
    Button
} from 'react-native';
import {save} from "./helper";


const HomeComponent = ({route, navigation}) => {
    const [text, setText] = React.useState("");

    return (
        <View style={homeStyles.container}>
            <TextInput
                multiline
                style={homeStyles.input}
                onChangeText={(text) => setText(text)}
                placeholderTextColor="white"
                value={text}
                placeholder="Enter your misery here..."
            />
            <View style={homeStyles.buttonDiv}>
                <View style={homeStyles.buttonStyle}>
                    <Button 
                        title="past memos"
                        color="#0ff0fc"
                        onPress={() => {
                            navigation.navigate('catalog')
                        }}
                    />
                </View>
                <View style={homeStyles.buttonStyle}>
                    <Button
                        title="Save"
                        color="yellow"
                        onPress={() => {
                            save(text);
                            setText("")
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const homeStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center"
    },

    buttonDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonStyle: {
        marginHorizontal:"10%",
        width: "40%" 
    },

    input: {
        textAlignVertical: "top",
        borderColor: "yellow",
        fontSize: 20,
        margin: 15,
        padding: 10,
        color: "white",
        width: "100%",
        height: "70%",
        borderWidth: 3,
        
    },
    

});
 

export default HomeComponent;