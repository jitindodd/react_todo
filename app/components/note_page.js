import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button
} from 'react-native';

export default class NotePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      note: this.props.navigation.state.note
    }
  }

  updateStuff(newText) {
    params.updateNote(params.keyval, newText)
    this.setState({note: newText})
  }

  render() {
    // console.log('Note page props: ', this.props);
    const params = this.props.navigation.state.params;
    return (
      <View>
        <TextInput value={this.state.note}
          onChangeText={(newText) => updateStuff(newText)}></TextInput>
        {/* <Button title="Save"></Button> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noteText: {
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: "#E91E63"
  }
});
