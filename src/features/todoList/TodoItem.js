import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { CheckBox } from 'react-native-elements'
import PropTypes from 'prop-types'

const TodoItem = (props) => {
  const { title, complete, onPress, onLongPress } = props
  return (
    <View style={styles.container}>
      <CheckBox
        title={title}
        checked={complete}
        onPress={onPress}
        onLongPress={onLongPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

TodoItem.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func
}

TodoItem.defaultProps = {
  title: '',
  checked: false,
  onLongPress: () => {},
  onPress: () => {}
}

export default TodoItem
