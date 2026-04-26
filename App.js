import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  // Use local server for development since the absolute paths in the bundle 
  // expect to be at the root (/) and not under (/app/).
  const targetUrl = 'http://10.66.22.35:3001';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {Platform.OS === 'web' ? (
        <iframe 
          src={targetUrl}
          style={{ flex: 1, width: '100%', height: '100%', border: 'none', backgroundColor: '#000000' }}
          allow="camera; microphone; geolocation"
          title="MPOWER SPACE SECURE APP"
        />
      ) : (
        <WebView 
          source={{ uri: targetUrl }} 
          style={styles.webview}
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
          javaScriptEnabled={true}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Pure OLED Black
  },
  webview: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
