// YouTubePlayer.js
import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const YouTubePlayer = ({ videoId, height = 300, width = 300 }) => {
  const webviewRef = useRef(null);

  // URL iframe YouTube với videoId truyền vào và tự động phát video, tắt tiếng
  const youtubeIframeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&iv_load_policy=3&modestbranding=1&controls=0&rel=0&showinfo=0&loop:1`;

  return (
    <View style={[styles.container, { width, height }]}>
      <WebView
        ref={webviewRef}
        source={{ uri: youtubeIframeUrl }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        allowsFullscreenVideo={true}
        originWhitelist={['*']}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default YouTubePlayer;
