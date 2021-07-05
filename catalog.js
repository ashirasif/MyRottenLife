import React from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    ScrollView,
    ActivityIndicator
} from "react-native";
import {read} from "./helper";

// Cat short for Catalog
const Cat = (props) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: "black",
            alignItems: "center",
            padding: 10,
            marginTop: 10
        },
        Text: {
            fontSize: 17,
            color: "white"
        }
    });

    return (
        <View style={styles.button}>
            <TouchableOpacity
            onPress={() => props.onclick()}>
                <Text style={styles.Text}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const CatalogComponent = ({router, navigation}) => {
    const [cat, setCat] = React.useState([]);
    React.useEffect(async () => {
        setCat((await read()).map((title) => <Cat title={title} onclick={() => navigation.navigate("display", {name: title})} key={title}/>));
    }, [])

    var styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: "#3e4145",
      }  
    })
    
    return (
        <View style={styles.container}>
            <ScrollView>
                {cat}
            </ScrollView>
        </View>
    );
}


export default CatalogComponent;