import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'


function Search({ term, onTermChange, onTermSubmit }: any) {
    return (
        <View style={{padding: 15}}>
            <View style={style.search}>
                <Icon name={"search"} size={20} style={{ flex: 1, textAlign: 'center', color: "#000" }} />
                <TextInput style={style.input}
                    placeholder='Search Food'
                    autoCapitalize='none'
                    placeholderTextColor={"#000"}
                    autoCorrect={false}
                    value={term}
                    onChangeText={onTermChange}
                    onEndEditing={onTermSubmit}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    search: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: '100%',
        padding: 3,
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: "#fff"
    },
    input: {
        flex: 8,
        padding: 8,
        color: "#000",
        textDecorationColor: "#000"
    }
})

export default Search