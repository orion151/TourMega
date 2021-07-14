import {
  StyleSheet
} from 'react-native'

import {
  WHITE_COLOR,
  SEARCHTEXTFIELD_BORDER_COLOR,
  PREDEFINEDPLACES_DESC_COLOR
} from '../../constants'

const styles = StyleSheet.create({
  textInputContainer: {
    width: '100%',
    backgroundColor: WHITE_COLOR,
    borderRadius: 12,
    borderTopWidth: 0,
    borderColor: SEARCHTEXTFIELD_BORDER_COLOR,
    textAlign: 'center'
  },
  textInput: {
    padding: 0,
    margin: 0,
    fontWeight: 'bold',
    fontSize: 18
  },
  description: {
    fontWeight: 'bold'
  },
  predefinedPlacesDescription: {
    color: PREDEFINEDPLACES_DESC_COLOR
  },
  listView: {
    borderWidth: 0
  }
})

export default styles
