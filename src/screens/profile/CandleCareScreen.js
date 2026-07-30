// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   StatusBar,
// } from 'react-native';
// import {
//   Scissors,
//   Sparkles,
//   ShieldCheck,
//   Clock3,
//   PackageOpen,
// } from 'lucide-react-native';

// import Ionicons from '@react-native-vector-icons/ionicons';

// import CareTipCard from '../../components/Care/CareTipCard';

// const CandleCareScreen = ({ navigation }) => {
//   //   const tips = [
//   //     {
//   //       id: 1,
//   //       title: 'Trim the wick',
//   //       description:
//   //         'Before every burn, trim the wick to 4–5 mm. This helps prevent soot and ensures a clean, even burn.',
//   //       icon: 'cut-outline',
//   //     },
//   //     {
//   //       id: 2,
//   //       title: 'First burn matters',
//   //       description:
//   //         'Allow the wax to melt completely across the surface during the first burn to avoid tunnelling.',
//   //       icon: 'time-outline',
//   //     },
//   //     {
//   //       id: 3,
//   //       title: 'Burn safely',
//   //       description:
//   //         'Keep candles on a heat-resistant surface away from curtains, children, pets and strong air drafts.',
//   //       icon: 'flame-outline',
//   //     },
//   //     {
//   //       id: 4,
//   //       title: 'Mind the burn time',
//   //       description:
//   //         'Do not burn your candle for more than 4 hours continuously. Allow it to cool before relighting.',
//   //       icon: 'hourglass-outline',
//   //     },
//   //     {
//   //       id: 5,
//   //       title: 'Store it right',
//   //       description:
//   //         'Store candles in a cool, dry place away from sunlight to preserve fragrance and colour.',
//   //       icon: 'archive-outline',
//   //     },
//   //   ];
//   const tips = [
//     {
//       id: 1,
//       title: 'Trim the wick',
//       description:
//         'Before every burn, trim the wick to 4–5 mm. This helps prevent soot and ensures a clean, even burn.',
//       icon: Scissors,
//     },
//     {
//       id: 2,
//       title: 'First burn matters',
//       description:
//         'Allow the wax to melt completely across the surface during the first burn to avoid tunnelling.',
//       icon: Sparkles,
//     },
//     {
//       id: 3,
//       title: 'Burn safely',
//       description:
//         'Keep candles on a heat-resistant surface away from curtains, children, pets and strong air drafts.',
//       icon: ShieldCheck,
//     },
//     {
//       id: 4,
//       title: 'Mind the burn time',
//       description:
//         'Do not burn your candle for more than 4 hours continuously. Allow it to cool before relighting.',
//       icon: Clock3,
//     },
//     {
//       id: 5,
//       title: 'Store it right',
//       description:
//         'Store candles in a cool, dry place away from sunlight to preserve fragrance and colour.',
//       icon: PackageOpen,
//     },
//   ];
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#111111" />

//       {/* Header */}

//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={26} color="#fff" />
//         </TouchableOpacity>

//         <Text style={styles.headerTitle}>Candle Care Guide</Text>

//         <TouchableOpacity>
//           <Ionicons name="bookmark-outline" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: 40 }}
//       >
//         {/* Hero */}

//         <View style={styles.hero}>
//           <Image
//             source={require('../../assets/images/products/rose.png')}
//             style={styles.heroImage}
//           />

//           <View style={styles.overlay}>
//             <Text style={styles.heroTitle}>
//               Care for your candle,{'\n'}
//               enjoy it to the fullest
//             </Text>

//             <Text style={styles.heroSubtitle}>
//               A little care goes a long way in making your VAAYU candles last
//               longer and burn beautifully.
//             </Text>

//             <Text style={styles.quote}>Mindful care, magical glow.</Text>
//           </View>
//         </View>

//         {/* Section Title */}

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Essential Candle Care Tips</Text>

//           <View style={styles.line} />
//         </View>

//         {/* Tips */}
//         {tips.map(item => (
//           <CareTipCard
//             key={item.id}
//             title={item.title}
//             description={item.description}
//             icon={item.icon}
//           />
//         ))}

//         {/* Bottom Card */}

//         <View style={styles.bottomCard}>
//           <Ionicons name="heart-outline" size={38} color="#6A4CFF" />

//           <View style={{ flex: 1, marginLeft: 18 }}>
//             <Text style={styles.bottomTitle}>
//               Every candle is handmade with love.
//             </Text>

//             <Text style={styles.bottomText}>
//               Follow these simple tips and let your VAAYU candle create
//               beautiful moments for you.
//             </Text>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default CandleCareScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F5F1',
//   },

//   header: {
//     height: 60,
//     backgroundColor: '#111111',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//   },

//   headerTitle: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: '700',
//   },

//   hero: {
//     height: 340,
//     backgroundColor: '#222',
//   },

//   heroImage: {
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//   },

//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,.45)',
//     padding: 28,
//     justifyContent: 'center',
//   },

//   heroTitle: {
//     color: '#fff',
//     fontSize: 34,
//     fontWeight: '700',
//     lineHeight: 42,
//   },

//   heroSubtitle: {
//     color: '#eee',
//     marginTop: 16,
//     fontSize: 17,
//     lineHeight: 27,
//   },

//   quote: {
//     color: '#F5D08B',
//     marginTop: 24,
//     fontSize: 20,
//     fontStyle: 'italic',
//   },

//   section: {
//     alignItems: 'center',
//     marginVertical: 30,
//   },

//   sectionTitle: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#222',
//   },

//   line: {
//     width: 80,
//     height: 3,
//     backgroundColor: '#D6B36A',
//     marginTop: 14,
//     borderRadius: 10,
//   },

//   bottomCard: {
//     marginHorizontal: 20,
//     marginTop: 20,
//     backgroundColor: '#F1EAFE',
//     borderRadius: 18,
//     padding: 22,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   bottomTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#222',
//   },

//   bottomText: {
//     marginTop: 8,
//     color: '#555',
//     fontSize: 15,
//     lineHeight: 22,
//   },
// });

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';

import {
  ChevronLeft,
  Bookmark,
  Flower2,
  Scissors,
  Sparkles,
  ShieldCheck,
  Clock3,
  PackageOpen,
  HeartHandshake,
} from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CareTipCard from '../../components/Care/CareTipCard';
import styles from '../../styles/CandleCareStyle';

const CandleCareScreen = ({ navigation }) => {
  const tips = [
    {
      id: 1,
      icon: Scissors,
      title: 'Trim the Wick',
      description:
        'Trim the wick to about 5 mm before every burn to ensure a clean, steady flame and reduce soot.',
    },
    {
      id: 2,
      icon: Sparkles,
      title: 'First Burn Matters',
      description:
        'Allow the wax to melt evenly across the entire surface during the first burn to prevent tunnelling.',
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'Burn Safely',
      description:
        'Always place candles on a heat-resistant surface away from curtains, children, pets and air drafts.',
    },
    {
      id: 4,
      icon: Clock3,
      title: 'Mind the Burn Time',
      description:
        'Avoid burning your candle continuously for more than 4 hours. Allow it to cool before relighting.',
    },
    {
      id: 5,
      icon: PackageOpen,
      title: 'Store Properly',
      description:
        'Store candles in a cool, dry place away from direct sunlight to preserve fragrance and colour.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        barStyle="light-content"
        backgroundColor="#121212"
      />

      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          {/* <Flower2 size={18} color="#D8B16A" /> */}

          <Text style={styles.headerTitle}>Candle Care Guide</Text>
        </View>

        <TouchableOpacity activeOpacity={0.8}>
          <Bookmark size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero */}

        <ImageBackground
          source={require('../../assets/images/HeroImage.png')}
          imageStyle={styles.heroImage}
          style={styles.hero}
        >
          <View style={styles.overlay}>
            {/* <Text style={styles.heroSmall}>VAAYU GUIDE</Text> */}

            <Text style={styles.heroTitle}>
              {`Care for your candle,enjoy it\n to the fullest`}
            </Text>

            <Text style={styles.heroSubtitle}>z</Text>
          </View>
        </ImageBackground>

        {/* Section */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Essential Candle Care</Text>

          <View style={styles.divider}>
            <View style={styles.line} />

            <Flower2 size={18} color="#D7B169" />

            <View style={styles.line} />
          </View>
        </View>

        {/* Tips */}

        {tips.map(item => (
          <CareTipCard
            key={item.id}
            number={item.id}
            title={item.title}
            description={item.description}
            Icon={item.icon}
          />
        ))}

        {/* Bottom Card */}

        <View style={styles.footerCard}>
          <View style={styles.footerIcon}>
            <HeartHandshake size={34} color="#CFA75F" />
          </View>

          <Text style={styles.footerTitle}>Handcrafted with Love</Text>

          <Text style={styles.footerDescription}>
            Every VAAYU candle is thoughtfully handcrafted to bring warmth,
            fragrance and calm into your home. Caring for it properly ensures
            every burn is as beautiful as the first.
          </Text>
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CandleCareScreen;
