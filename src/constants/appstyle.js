import { StyleSheet } from 'react-native';
import { moderateScale, scale } from '../utils/responsive';
import { FONTS } from './fonts';
import { Colors } from './colors';

const appstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: moderateScale(20),
  },
  body: {
    padding: 15,
  },

  title: {
    color: Colors.primary,
    fontFamily: FONTS.heading,
    fontSize: moderateScale(32),
    marginBottom: '10%',
  },
  subtitle: {
    color: Colors.primary,
    fontSize: scale(16),
    letterSpacing: 0.5,
    fontFamily: FONTS.heading,
  },

  description: {
    color: Colors.secondaryText,
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    fontFamily: FONTS.body,
  },
  separator: {
    width: 1,
    backgroundColor: '#2C2C2C',
    marginVertical: 15,
  },

  circle: {
    height: 55,
    width: 55,
    borderRadius: 50,
    backgroundColor: Colors.darkgray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  icontitle: {
    color: Colors.primary,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: FONTS.medium,
  },
  iconWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  spacerow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  // title: {
  // color: '#ffrgb(255, 255, 255)
  //   fontSize: 30,
  //   fontFamily: 'PlayfairDisplay-Regular',
  //   marginBottom: 15,
  // },

  // description: {
  //   color: '#BDBDBD',
  //   fontSize: 16,
  //   lineHeight: 28,
  //   fontFamily: 'Montserrat-Regular',
  //   marginBottom: 35,
  // },
});
export default appstyle;
