import {StyleSheet} from 'react-native';
import {CARD} from '../utils/constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 45,
    backgroundColor: 'transparent',
    paddingBottom: 55,
  },
  image: {
    marginTop: 10,
    width: CARD.WIDTH,
    height: CARD.HEIGHT,
    borderRadius: CARD.BORDER_RADIUS,
    zIndex: -1,
    position: 'absolute',
    // alignSelf: 'center',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 160,
    borderRadius: CARD.BORDER_RADIUS,
  },
  name: {
    position: 'absolute',
    bottom: 22,
    left: 22,
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  choiceContainer: {
    position: 'absolute',
    top: 100,
  },
  likeContainer: {
    left: 45,
    transform: [{rotate: '-30deg'}],
  },
  maybeContainer: {
    left: 50,
    top: 150,
  },
  nopeContainer: {
    right: 45,
    transform: [{rotate: '30deg'}],
  },
});
