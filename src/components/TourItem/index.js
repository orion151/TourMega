import React from 'react'

import {
  View,
  Image,
  Text
} from 'react-native'

import PropTypes from 'prop-types'

import {
  Favorite,
  Review
} from './components'

import styles from './styles'

const TourItem = (props) => {
  const { item } = props

  return (
        <View style={styles.tourItemContainer}>
            <Image
                source={{ uri: item.thumbnail_url }}
                alt={item.name}
                style={styles.tourItemImage}
            />
            <View style={styles.description}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.place}>{item.city}( {item.duration_in_minutes ?? 0} Min)</Text>
                <Text style={styles.price}>${item.price_in_usd}</Text>
                <View style={styles.like}>
                  <Favorite
                    favorite={item.favorited}
                  />
                  <Review
                    stars={item.average_rating}
                  />
                </View>
            </View>
        </View>
  )
}

TourItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default TourItem
