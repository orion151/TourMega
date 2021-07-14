import {
  StyleSheet
} from 'react-native'

import { BLACK_COLOR, WHITE_COLOR } from '../../constants'

const styles = StyleSheet.create({
  tourItemContainer: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: BLACK_COLOR,
    margin: 10
  },
  tourItemImage: {
    flex: 1,
    aspectRatio: 1
  },
  description: {
    display: 'flex',
    flex: 1,
    marginTop: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: WHITE_COLOR
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5
  },
  place: {
    fontSize: 16,
    fontWeight: '700',
    paddingBottom: 5
  },
  price: {
    fontSize: 15,
    fontWeight: '500',
    paddingBottom: 5
  },
  like: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10
  }
})

export default styles
