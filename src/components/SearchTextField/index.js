import React from 'react'

import PropTypes from 'prop-types'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import {
  GOOGLE_PLACE_API_KEY
} from '../../constants'

import styles from './styles'

const SearchTextField = (props) => {
  const { onUpdateLocation } = props

  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      autoFocus={true}
      returnKeyType={'search'}
      fetchDetails={true}
      renderDescription={row => row.description}
      onPress={(data) => {
        onUpdateLocation(data)
      }}
      listViewDisplayed={'auto'}
      keyboardShouldPersistTaps={'handled'}
      getDefaultValue={() => ''}
      query={{
        key: GOOGLE_PLACE_API_KEY,
        language: 'en',
        types: '(cities)'
      }}
      styles={{
        textInputContainer: styles.textInputContainer,
        textInput: styles.textInput,
        description: styles.description,
        predefinedPlacesDescription: styles.predefinedPlacesDescription,
        listView: styles.listView
      }}
      currentLocation={false}
      currentLocationLabel='Current location'
      nearbyPlacesAPI='GooglePlacesSearch'
      GoogleReverseGeocodingQuery={{
      }}
      GooglePlacesSearchQuery={{
        rankby: 'distance'
      }}
      debounce={200}
    />
  )
}

SearchTextField.propTypes = {
  onUpdateLocation: PropTypes.func.isRequired
}

export default SearchTextField
