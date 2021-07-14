import React, { useState } from 'react'

import {
  View
} from 'react-native'

import Toast from 'react-native-simple-toast'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import {
  Button,
  SearchTextField
} from '../../components'

import {
  getTourList
} from '../../redux/slice/tourListModelSlice'

import styles from './styles'

const LocationSearch = (props) => {
  const { navigation } = props
  const dispatch = useDispatch()
  const [location, setLocation] = useState('1')

  const getTourDetails = () => {
    const loc = {
      latBottomRight: '37.0768407426',
      lonBottomRight: '-121.03312429980001',
      latTopLeft: '37.599575657399996',
      lonTopLeft: '-122.7395329002'
    }
    if (location) {
      dispatch(getTourList(loc))
      navigation.navigate('TourView')
    } else {
      Toast.show('Location should not be empty', Toast.LONG)
    }
  }

  return (
    <View style={styles.locationSearchContainer}>
      <SearchTextField
        onUpdateLocation={(data) => setLocation('1')}
      />
      <Button
        onClick={() => getTourDetails()}
      />
    </View>
  )
}

LocationSearch.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default LocationSearch
