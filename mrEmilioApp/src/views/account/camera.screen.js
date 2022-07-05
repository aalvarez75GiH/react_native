import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components/native";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Camera, CameraType } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text } from "../../infraestructure/typography/text.component";
import { AuthenticationContext } from "../../infraestructure/services/authentication/authentication.context";
import {
  CameraButtonContainer,
  CameraContainer,
  ProfileCamera,
  FlipButton,
  CameraText,
} from "./account.elements";

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(CameraType.front);
  const cameraRef = useRef();

  const { user } = useContext(AuthenticationContext);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (!hasPermission) {
    return (
      <CameraContainer>
        <Text variant="label">No access to camera</Text>
      </CameraContainer>
    );
  }
  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      console.log(photo);
      navigation.goBack();
    }
  };
  return (
    <CameraContainer>
      <TouchableOpacity onPress={snap}>
        <ProfileCamera
          type={cameraType}
          ref={(camera) => (cameraRef.current = camera)}
          ratio={"16:9"}
        >
          <CameraButtonContainer>
            <FlipButton
              onPress={() => {
                setCameraType((type) =>
                  type === CameraType.front ? CameraType.back : CameraType.front
                );
              }}
            >
              <CameraText>Flip Camera</CameraText>
            </FlipButton>
          </CameraButtonContainer>
        </ProfileCamera>
      </TouchableOpacity>
    </CameraContainer>
  );
};
