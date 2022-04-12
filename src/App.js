// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import Routes from './Routes';
// import { Provider, useDispatch, useSelector } from "react-redux";
// import { createStore } from "redux";

// --------------- LIBRARIES ---------------
import React, { Fragment, useEffect } from 'react';
import { TextInput, SafeAreaView, Text, Platform, UIManager, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from './Components/Hooks/ThemeProvider';
// import AsyncStorage from '@react-native-community/async-storage';

// --------------- ASSETS ---------------
import Routes from './Routes';
import { Store, Persistor } from './Redux/Store';
import { Colors } from './CommonConfig';

export default function App() {
  return (
          <ThemeProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Fragment>
                    <Provider store={Store}>
                        <PersistGate persistor={Persistor}>
                            <StatusBar backgroundColor={Colors.WHITE} barStyle={'dark-content'} />
                            <Routes />
                        </PersistGate>
                    </Provider>
                </Fragment>
            </SafeAreaView>
        </ThemeProvider>
  )
}
