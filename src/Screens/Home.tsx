import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Search from '../Components/Search';
import UseResult from '../Hooks/UseResult';
import ResultList from '../Components/ResultList';
import Loading from '../Components/Loading';

function Home({ navigation }: any) {
    const [term, setTerm] = useState('');
    const [searchApi, result, errorMessage, isLoading]: any = UseResult()

    const filterPrice = (price: any) => {
        return result.filter((result: any) => {
            return result.price === price
        })
    }

    return (
        <>
            {isLoading ? <Loading/> :
                <View style={style.container}>
                    <Search
                        term={term}
                        onTermChange={setTerm}
                        onTermSubmit={() => searchApi(term)} />
                    <ScrollView style={{height: "100%"}}>
                        <ResultList navigate={navigation} result={filterPrice('$')} title='Cost Efective' />
                        <ResultList navigate={navigation} result={filterPrice('$$')} title='Bit Pricies' />
                        <ResultList navigate={navigation} result={filterPrice('$$$')} title='Big Spender' />
                    </ScrollView>
                </View>
            }
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2ebe3"
    }
})

export default Home;