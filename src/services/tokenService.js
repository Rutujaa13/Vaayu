// import * as Keychain from 'react-native-keychain';

// export const saveToken = async (accessToken, refreshToken) => {
//   await Keychain.setGenericPassword(
//     'token',
//     JSON.stringify({
//       accessToken,
//       refreshToken,
//     }),
//   );
// };

// export const getTokens = async () => {
//   const credentials = await Keychain.getGenericPassword();

//   if (!credentials) return null;

//   return JSON.parse(credentials.password);
// };

export const saveAccessToken = async accessToken => {
  const credentials = await Keychain.getGenericPassword();

  if (!credentials) return;

  const tokens = JSON.parse(credentials.password);

  tokens.accessToken = accessToken;

  await Keychain.setGenericPassword('auth', JSON.stringify(tokens));
};

// export const clearTokens = async () => {
//   await Keychain.resetGenericPassword();
// };

import * as Keychain from 'react-native-keychain';

export const saveTokens = async (accessToken, refreshToken, user) => {
  await Keychain.setGenericPassword(
    'auth',
    JSON.stringify({
      accessToken,
      refreshToken,
      user,
    }),
  );
};

export const getTokens = async () => {
  const credentials = await Keychain.getGenericPassword();

  if (!credentials) return null;

  return JSON.parse(credentials.password);
};

// export const saveAccessToken = async accessToken => {
//   const credentials = await Keychain.getGenericPassword();

//   if (!credentials) return;

//   const tokens = JSON.parse(credentials.password);

//   tokens.accessToken = accessToken;

//   await Keychain.setGenericPassword('auth', JSON.stringify(tokens));
// };

export const clearTokens = async () => {
  await Keychain.resetGenericPassword();
};
