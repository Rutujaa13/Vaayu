// import React from 'react';

// import { View, TextInput, Text, StyleSheet } from 'react-native';

// import { Colors } from '../constants/colors';
// import { FONTS, Fonts } from '../constants/fonts';
// import { scale } from '../utils/responsive';

// const AppTextInput = ({
//   label,
//   error,
//   style,
//   value,
//   onChangeText,
//   ...props
// }) => {
//   return (
//     <View style={styles.container}>
//       {label && <Text style={styles.label}>{label}</Text>}

//       <TextInput
//         {...props}
//         placeholderTextColor="#777"
//         style={[styles.input, style]}
//         value={value}
//         onChangeText={onChangeText}
//       />

//       {!!error && <Text style={styles.error}>{error}</Text>}
//     </View>
//   );
// };

// export default AppTextInput;

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: scale(20),
//   },

//   label: {
//     color: Colors.text,

//     marginBottom: scale(8),

//     fontFamily: FONTS.medium,

//     fontSize: scale(14),
//   },

//   input: {
//     height: scale(55),

//     borderWidth: 0.5,

//     borderColor: Colors.lightAccent,

//     paddingHorizontal: scale(18),

//     color: Colors.text,

//     borderRadius: scale(5),

//     fontFamily: FONTS.medium,

//     backgroundColor: Colors.surface,
//     width: '99%',
//   },

//   error: {
//     color: Colors.danger,

//     marginTop: scale(6),

//     fontSize: scale(12),
//   },
// });

import React, { memo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import { Colors } from '../constants/colors';
import { FONTS } from '../constants/fonts';
import { scale } from '../utils/responsive';

const AppTextInput = ({
  label,
  error,
  style,
  inputStyle,
  value,
  onChangeText,
  leftIcon,
  secureTextEntry,
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(secureTextEntry);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[styles.inputContainer, error && { borderColor: Colors.danger }]}
      >
        {/* Left Icon */}
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={22}
            color={Colors.lightAccent}
            style={styles.leftIcon}
          />
        )}

        <TextInput
          {...props}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#777"
          secureTextEntry={hidePassword}
          style={[styles.input, inputStyle]}
        />

        {/* Password Eye */}
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <Ionicons
              name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
              size={22}
              color={Colors.lightAccent}
            />
          </TouchableOpacity>
        )}
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default memo(AppTextInput);

const styles = StyleSheet.create({
  container: {
    marginBottom: scale(20),
  },

  label: {
    color: Colors.text,
    marginBottom: scale(8),
    fontSize: scale(14),
    fontFamily: FONTS.medium,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.lightAccent,
    borderRadius: scale(8),
    backgroundColor: Colors.surface,
    paddingHorizontal: scale(12),
    height: scale(55),
  },

  leftIcon: {
    marginRight: scale(10),
  },

  input: {
    flex: 1,
    color: Colors.text,
    fontFamily: FONTS.medium,
    fontSize: scale(15),
  },

  error: {
    color: Colors.danger,
    marginTop: scale(5),
    fontSize: scale(12),
  },
});
