import { StyleSheet } from 'react-native';
import { scale, moderateScale } from '../utils/responsive';
import { FONTS } from '../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F6F2',
  },

  scrollContent: {
    paddingBottom: scale(40),
  },

  header: {
    height: scale(64),
    backgroundColor: '#181818',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: scale(20),

    borderBottomWidth: 1,
    borderBottomColor: '#2D2D2D',
  },

  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerTitle: {
    marginLeft: scale(8),

    color: '#FFFFFF',

    fontFamily: FONTS.heading,

    fontSize: moderateScale(20),

    letterSpacing: 0.5,
  },

  /* ===========================
      HERO
  ============================ */

  hero: {
    height: scale(340),
    justifyContent: 'flex-end',
  },

  heroImage: {
    // borderBottomLeftRadius: scale(32),
    // borderBottomRightRadius: scale(32),
  },

  overlay: {
    flex: 1,

    // justifyContent: 'flex-end',

    paddingHorizontal: scale(28),
    paddingBottom: scale(34),

    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heroSmall: {
    color: '#E0C38B',

    fontFamily: FONTS.heading,

    fontSize: moderateScale(30),

    letterSpacing: 2,

    marginBottom: scale(8),
  },

  heroTitle: {
    color: '#FFFFFF',

    fontFamily: FONTS.heading,

    fontSize: moderateScale(30),

    lineHeight: moderateScale(44),
  },

  heroSubtitle: {
    marginTop: scale(14),

    color: '#F2F2F2',

    fontFamily: FONTS.heading,

    fontSize: moderateScale(15),

    // lineHeight: moderateScale(25),
    textAlign: 'left',
  },

  /* ===========================
      SECTION
  ============================ */

  sectionHeader: {
    alignItems: 'center',

    marginTop: scale(34),
    marginBottom: scale(28),
  },

  sectionTitle: {
    color: '#242424',

    fontFamily: FONTS.heading,

    fontSize: moderateScale(28),
  },

  divider: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: scale(16),
  },

  line: {
    width: scale(70),

    height: 1,

    backgroundColor: '#D9C8A8',

    marginHorizontal: scale(14),
  },

  /* ===========================
      CARD
  ============================ */

  card: {
    flexDirection: 'row',

    marginHorizontal: scale(15),
    marginBottom: scale(18),

    padding: scale(8),

    backgroundColor: '#fff',

    borderRadius: moderateScale(24),

    borderWidth: 1,
    borderColor: '#EFE6DA',

    shadowColor: '#000',

    shadowOpacity: 0.06,

    shadowRadius: 12,

    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 5,
    justifyContent: 'space-between',
    flex: 1,
  },

  numberContainer: {
    width: scale(40),

    justifyContent: 'center',

    alignItems: 'center',
  },

  number: {
    color: '#C9A35A',

    fontFamily: FONTS.heading,

    fontSize: moderateScale(24),
    flex: 1,
    marginRight: 10,
    bottom: 10,
  },

  iconContainer: {
    width: scale(60),
    height: scale(60),

    borderRadius: scale(30),

    backgroundColor: '#FAF6EF',

    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: scale(14),
    right: scale(10),
    top: scale(15),
  },

  content: {
    flex: 1,
  },

  cardTitle: {
    color: '#222222',

    fontFamily: FONTS.heading,

    fontSize: moderateScale(18),

    marginBottom: scale(8),
  },

  cardDescription: {
    color: '#666666',

    fontFamily: FONTS.body,

    fontSize: moderateScale(12),
    marginBottom: 10,

    // lineHeight: moderateScale(24),
  },

  /* ===========================
      FOOTER CARD
  ============================ */

  footerCard: {
    marginHorizontal: scale(20),

    marginTop: scale(12),

    backgroundColor: '#FFFDF9',

    borderRadius: moderateScale(28),

    paddingVertical: scale(28),

    paddingHorizontal: scale(24),

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#EFE6D8',

    shadowColor: '#000',

    shadowOpacity: 0.05,

    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 4,
  },

  footerIcon: {
    width: scale(72),

    height: scale(72),

    borderRadius: scale(36),

    backgroundColor: '#FBF4E8',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: scale(18),
  },

  footerTitle: {
    color: '#222222',

    fontFamily: FONTS.heading,

    fontSize: moderateScale(24),

    textAlign: 'center',

    marginBottom: scale(12),
  },

  footerDescription: {
    color: '#6D6D6D',

    fontFamily: FONTS.body,

    fontSize: moderateScale(15),

    lineHeight: moderateScale(26),

    textAlign: 'center',
  },

  bottomSpacing: {
    height: scale(40),
  },

  /* ===========================
      OPTIONAL
  ============================ */

  quote: {
    marginHorizontal: scale(30),

    marginVertical: scale(24),

    textAlign: 'center',

    color: '#C9A35A',

    fontFamily: FONTS.headingRegular,

    fontSize: moderateScale(18),

    lineHeight: moderateScale(28),
  },

  glow: {
    position: 'absolute',

    top: scale(60),
    right: scale(40),

    width: scale(90),
    height: scale(90),

    borderRadius: scale(45),

    backgroundColor: '#FFE7A8',

    opacity: 0.18,
  },
});

export default styles;
