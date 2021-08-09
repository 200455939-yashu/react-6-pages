import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import Page1  from './src/components/Page1'
import Page2  from './src/components/Page2'
import Page3  from './src/components/Page3'
import Page4  from './src/components/Page4'
import Page5  from './src/components/Page5'
import Page6  from './src/components/Page6'

export default function App() {
  const [page, setPage] = useState(1)

  return (
    <SafeAreaView style={styles.droidSafeArea} onTouchEnd={() => {setPage((page === 6) ? 1 : page + 1)}}>
      {page === 1 && <Page1 />}
      {page === 2 && <Page2 />}
      {page === 3 && <Page3 />}
      {page === 4 && <Page4 />}
      {page === 5 && <Page5 />}
      {page === 6 && <Page6 />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
})
