// @flow
import React from "react"
import { Text, View } from "react-native"

// components
import { Title, Button, Image } from "../components"
import { Colors } from "../themes"

export default class DetailContainer extends React.PureComponent<null> {
  static navigationOptions = {
    title: "Detail",
  }

  render() {
    return (
      <View>
        <Text>Detail screen</Text>
      </View>
    )
  }
}
