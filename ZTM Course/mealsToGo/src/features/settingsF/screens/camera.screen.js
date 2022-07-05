import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components/native";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

// ****************** Styled Components
const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

// ****************************************

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const { user } = useContext(AuthenticationContext);

  const cameraRef = useRef();

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
      <View style={styles.container}>
        <Text variant="label">No access to camera</Text>;
      </View>
    );
  }

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={snap}>
        <ProfileCamera
          type={type}
          ref={(camera) => (cameraRef.current = camera)}
          ratio={"16:9"}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                )
              }
            >
              <Text style={styles.text}> Flip camera </Text>
            </TouchableOpacity>
          </View>
        </ProfileCamera>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.3,
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "#010606",
    padding: 15,
    borderRadius: 45,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});

// <View style={styles.container}>
//   <ProfileCamera type={type} ref={(camera) => (cameraRef.current = camera)}>
//     <View style={styles.buttonContainer}>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           setType(
//             type === CameraType.back ? CameraType.front : CameraType.back
//           );
//         }}
//       >
//         <Text style={styles.text}> Flip camera </Text>
//       </TouchableOpacity>
//     </View>
//   </ProfileCamera>
// </View>
