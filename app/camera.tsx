import { Camera } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const picture = await cameraRef.current.takePictureAsync({ base64: true });
      setPhoto(picture.uri);
    }
  };

  if (hasPermission === null) {
    return <View><Text>Solicitando permisos...</Text></View>;
  }
  if (hasPermission === false) {
    return <View><Text>No hay acceso a la cámara</Text></View>;
  }

  return (
    <View style={styles.container}>
      {!photo ? (
        <>
          <Camera style={styles.camera} type={CameraType.back} ref={cameraRef} />
          <Button title="📸 Tomar foto" onPress={takePhoto} />
        </>
      ) : (
        <>
          <Image source={{ uri: photo }} style={styles.preview} />
          <Button title="Tomar otra" onPress={() => setPhoto(null)} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  camera: { flex: 1, width: '100%' },
  preview: { flex: 1, width: '100%', resizeMode: 'contain' },
});
