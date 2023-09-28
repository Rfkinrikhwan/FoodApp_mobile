import React from 'react';
import { View, Text } from 'react-native';

function Loading() {
  return (
    <View style={{ height: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#f2ebe3", }}>
      <Text style={{ fontSize: 20, fontWeight: "900" }}>Loading ...</Text>
    </View>
  );
}

export default Loading;
