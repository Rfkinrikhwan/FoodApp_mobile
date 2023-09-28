import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function CardFood({ data }: any) {
    return (
        <View style={[style.item, style.shadowProp]}>
            <Image style={style.img} source={{ uri: data.image_url }} />
            <View style={style.info}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000' }}>{data.name}</Text>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Icon name='star' style={{ color: 'gold' }} size={16} />
                    <Text style={{ marginHorizontal: 3, fontSize: 16, fontWeight: 'bold', color: '#000' }}>
                        {data.rating}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    item: {
        width: 250,
        height: 250,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
    },
    img: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    info: {
        marginTop: 5,
    }
})

export default CardFood