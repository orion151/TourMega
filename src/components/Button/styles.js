import {
  StyleSheet
} from 'react-native'

import { BLACK_COLOR, WHITE_COLOR } from '../../constants'

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: BLACK_COLOR
  },
  buttonLabel: {
    color: WHITE_COLOR,
    fontSize: 18
  }
})

export default styles
