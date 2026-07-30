// import 'react-native-gesture-handler';
// import React from 'react';

// export default function App() {
//   return <RootNavigator />;
// }

import { AuthProvider } from './src/context/AuthContext';
import RootNavigator from './src/routes/RootNavigator';

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
