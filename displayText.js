
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from "react-native";
import React from "react";
import { readfile } from "./helper";

const DisplayText = ({route, navigation}) => {
    const [text, setText] = React.useState("");
    const {name} = route.params;
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#3e4145",
            justifyContent: "center"
        },
        text: {
            color: "white",
            textAlign: 'left',
            fontSize: 20,
            fontFamily: "verdana"
        },
        textView: {
            margin: 10
        }
    });

    React.useEffect(() => {
        readfile(name)
            .then((text) => setText(text))
            .catch((err) => console.log(err));
    }, [])

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.textView}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default DisplayText;

