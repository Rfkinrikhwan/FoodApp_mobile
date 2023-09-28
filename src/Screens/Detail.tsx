import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, FlatList } from 'react-native'
import Yelp from '../Api/Yelp';
import Loading from '../Components/Loading';
import Icon from 'react-native-vector-icons/FontAwesome5'

function Detail({ route }: any) {
  const [detailFood, setDetailFood]: any = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = route.params;

  const getDetailFood = async () => {
    const response = await Yelp.get(`/${id}`);
    setDetailFood(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getDetailFood();
  }, [])

  const ItemSeparator = () => (
    <View style={{ width: 30 }} />
  );

  return (
    <>
      {isLoading ? <Loading /> :
        <>
          <ScrollView style={style.wrap}>
            <View style={style.shadowProp}>
              <Image source={{ uri: detailFood.image_url }} style={style.image} />
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={style.subImage}>
                <FlatList
                  style={style.smallImg}
                  horizontal={true}
                  data={detailFood.photos}
                  keyExtractor={(res) => res}
                  renderItem={({ item }) => {
                    return (
                      <>
                        <Image style={style.imgSmall} source={{ uri: item }} />
                      </>
                    )
                  }}
                  ItemSeparatorComponent={ItemSeparator}
                />
              </View>
            </View>
            <View style={style.detailInfo}>
              <View style={{ alignItems: "center", padding: 10, marginBottom: 10, }}>
                <View style={style.buttonUp}></View>
              </View>
              <View style={{ flex: 1, padding: 15, }}>
                <Text style={{ fontSize: 24, fontWeight: "800", color: "#000" }}>
                  {detailFood.name}
                </Text>
                <Text style={{fontSize: 18, marginTop: 5, fontWeight: "800", color: "#000"}}>
                  Phone Number : {detailFood.display_phone}
                </Text>
                <Text style={{fontSize: 18, marginTop: 5, fontWeight: "800", color: "#000"}}>
                  Location : {detailFood.location.address1}
                </Text>
                <Text style={{fontSize: 18, marginTop: 5, fontWeight: "800", color: "#000"}}>
                  City : {detailFood.location.city}
                </Text>
                <Text style={{fontSize: 18, marginTop: 5, fontWeight: "800", color: "#000"}}>
                  Reviewers : {detailFood.review_count}
                </Text>
                <Text style={{fontSize: 18, marginTop: 5, fontWeight: "800", color: "#000"}}>
                  <Icon name='star' style={{ color: 'gold',}} size={16} /> {detailFood.rating}
                </Text>
              </View>
            </View>
          </ScrollView>
        </>
      }
    </>
  )
}

const style = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "#f2ebe3",
  },
  image: {
    width: "100%",
    height: 230,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#fff"
  },
  smallImg: {
    width: "100%",
    height: 500,
  },
  imgSmall: {
    width: 70,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#fff",
  },
  subImage: {
    backgroundColor: "#e1e7a2",
    height: 85,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  shadowProp: {
    shadowColor: '#000',
    elevation: 50,
    padding: 8,
    borderRadius: 20,
    shadowOffset: { width: -5, height: 10 },
  },
  detailInfo: {
    backgroundColor: "#e1e7a2",
    flex: 1,
    width: "100%",
    height: 500,
    borderTopLeftRadius: 50,
    borderTopEndRadius: 50,
    marginTop: 10,
    overflow: "hidden"
  },
  buttonUp: {
    backgroundColor: "#F1EFEF",
    width: 150,
    height: 7,
    borderRadius: 15,
  }
})

export default Detail