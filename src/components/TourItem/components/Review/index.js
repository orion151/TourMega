import React from 'react'

import {
  View
} from 'react-native'

import Icon from 'react-native-vector-icons/Entypo'
import PropTypes from 'prop-types'

import styles from './styles'
import { BLACK_COLOR, YELLOW_COLOR } from '../../../../constants'

const Review = (props) => {
  const { stars } = props

  return (
        <View style={styles.reviewContainer}>
            <Icon name="star-outlined" size={30} color={stars > 1 ? YELLOW_COLOR : BLACK_COLOR} />
            <Icon name="star-outlined" size={30} color={stars > 2 ? YELLOW_COLOR : BLACK_COLOR} />
            <Icon name="star-outlined" size={30} color={stars > 3 ? YELLOW_COLOR : BLACK_COLOR} />
            <Icon name="star-outlined" size={30} color={stars > 4 ? YELLOW_COLOR : BLACK_COLOR} />
            <Icon name="star-outlined" size={30} color={ (stars > 4 && stars <= 5) ? YELLOW_COLOR : BLACK_COLOR} />
        </View>
  )
}

Review.propTypes = {
  stars: PropTypes.number.isRequired
}

export default Review
