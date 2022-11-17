import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TabBar = () => {
  return (
    <View style={styles.root}>
      <Text>TabBar</Text>
    </View>
  )
}

export default TabBar

const styles = StyleSheet.create({
  root: {
    height: 90,
    borderTopStartRadius: 25,
    borderTopEndRadius:25,
    overflow:'hidden',
    backgroundColor:'pink'
  }
})