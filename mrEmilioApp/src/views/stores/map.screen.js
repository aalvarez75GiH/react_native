import React, { useContext, useState, useEffect } from "react";
import { View, Dimensions, Text } from "react-native";
import MapView from "react-native-maps";

import { Map } from "./map.elements";
import { LocationContext } from "../../infraestructure/services/location/location.context";
import { MapCallOut } from "./map.callout.component";

export const MapScreen = ({ route, navigation }) => {
  const { store } = route.params;
  const [latDelta, setLatDelta] = useState(0);
  const { location } = useContext(LocationContext);
  const { lat, lng, viewport } = location;
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    const latDelta = northeastLat - southwestLat;
    setLatDelta(latDelta);
  }, []);
  return (
    <>
      <View>
        <Map
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.12,
          }}
        >
          <MapView.Marker
            key={store.name}
            title={store.name}
            coordinate={{
              latitude: store.geometry.location.lat,
              longitude: store.geometry.location.lng,
            }}
          >
            <MapView.Callout
              onPress={() =>
                navigation.navigate("StoreDetail", {
                  store: store,
                })
              }
            >
              <MapCallOut store={store} />
            </MapView.Callout>
          </MapView.Marker>
        </Map>
      </View>
    </>
  );
};
