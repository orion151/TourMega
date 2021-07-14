import React from 'react'

import {
  View,
  Text,
  FlatList
} from 'react-native'

import { useSelector } from 'react-redux'

import {
  tourListModelSelector
} from '../../redux/slice/tourListModelSlice'

import {
  TourItem
} from '../../components'

import styles from './styles'

const TourView = () => {
  const { tourList } = useSelector(tourListModelSelector)

  return (
    <View style={styles.tourListContainer}>
          <FlatList
            data={tourList}
            renderItem={TourItem}
            keyExtractor={item => item.id}
            ListEmptyComponent={<Text style={styles.noItems}>No Items</Text>}
            />
        </View>
  )
}

export default TourView
