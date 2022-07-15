import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";

// import { SafeArea } from "../../../components/utilities/safe-area.component";
import { Map } from "./map.elements";
import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { MapCallOut } from "../components/map.callout.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/optimized.spacer.component";

export const RestaurantsMap = ({ navigation }) => {
  const [latDelta, setLatDelta] = useState(0);
  const { location } = useContext(LocationContext);
  const { error: restaurantsError } = useContext(RestaurantContext);
  const { lat, lng, viewport } = location;

  const { restaurants = [] } = useContext(RestaurantContext);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    const latDelta = northeastLat - southwestLat;
    setLatDelta(latDelta);
  }, [location, viewport]);

  return (
    <>
      <View>
        <Search />
        <Map
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
          }}
        >
          {restaurants.map((restaurant) => {
            return (
              <MapView.Marker
                key={restaurant.name}
                title={restaurant.name}
                coordinate={{
                  latitude: restaurant.geometry.location.lat,
                  longitude: restaurant.geometry.location.lng,
                }}
              >
                <MapView.Callout
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: restaurant,
                    })
                  }
                >
                  <MapCallOut restaurant={restaurant} />
                </MapView.Callout>
              </MapView.Marker>
            );
          })}
        </Map>
      </View>
    </>
  );
};

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  if (!location) {
    return (
      <Map
        region={{
          latitude: 0,
          longitude: 0,
          // latitudeDelta: latDelta,
          // longitudeDelta: 0.02,
        }}
      >
        <Text variant="error">There was a problem retrieving data</Text>
      </Map>
    );
  }
  return <RestaurantsMap navigation={navigation} />;
};
