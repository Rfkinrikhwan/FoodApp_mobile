import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import CardFood from './CardFood';
import { useNavigation } from '@react-navigation/native';

function ResultList({ title, result }: any) {

    const navigation: any = useNavigation()

    return (
        <View>
            <Text style={style.title}>{title}</Text>
            <FlatList
                style={style.content}
                horizontal
                data={result}
                keyExtractor={(res) => res.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id })}>
                            <CardFood data={item} />
                        </TouchableOpacity>
                    )
                }} />
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 10,
    },
    content: {
    }
})

export default ResultList