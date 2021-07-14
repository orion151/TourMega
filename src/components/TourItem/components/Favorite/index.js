import React, { useEffect } from 'react'

import {
  View
} from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'
import PropTypes from 'prop-types'

import {
  BLACK_COLOR,
  YELLOW_COLOR
} from '../../../../constants'

import styles from './styles'

const Favorite = (props) => {
  const { favorite } = props

  useEffect(() => {
    Icon.loadFont()
  }, [])

  return (
        <View style={styles.favoriteContainer}>
          {favorite
            ? <Icon name="like2" size={40} color={YELLOW_COLOR} />
            : <Icon name="like2" size={40} color={BLACK_COLOR} />
          }
        </View>
  )
}

Favorite.propTypes = {
  favorite: PropTypes.bool.isRequired
}

export default Favorite
