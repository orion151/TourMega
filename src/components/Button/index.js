import React from 'react'

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import PropTypes from 'prop-types'

import styles from './styles'

const Button = (props) => {
  const { onClick } = props

  return (
      <TouchableOpacity onPress={() => onClick()}>
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonLabel}>View Details</Text>
        </View>
      </TouchableOpacity>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button
