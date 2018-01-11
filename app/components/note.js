import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

export default class Note extends Component {
  render() {
    console.log('Note props: ', this.props);
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity onPress={() => navigate('NotePage',
        {keyval: this.props.keyval, note: this.props.val.note, updateNote: this.props.updateNote})}>
        <View key={this.props.keyval} style={styles.note}>

          <Text style={styles.noteText}>{this.props.val.date}</Text>
          {/* <TextInput
            style={styles.noteText}
            onChangeText={(noteText) => this.setState({})}
            value={this.props.val.note}>
          </TextInput> */}
          <Text style={styles.noteText}>{this.props.val.note}</Text>

          <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
            {/* <Text style={styles.noteDelete}></Text> */}
            <Image style={styles.trashIcon} source={require('./../images/trash.png')} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed"
  },
  noteText: {
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: "#E91E63"
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  trashIcon: {
    width: 10,
    height: 30
  }
});
