import React, { useContext, useState, useEffect } from "react";
import { View, Dimensions, Text } from "react-native";
import MapView from "react-native-maps";

import { Map } from "./map.elements";
import { LocationContext } from "../../infraestructure/services/location/location.context";
import { MapCallOut } from "./map.callout.component";

export const MapScreen = ({ route }) => {
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
            <MapView.Callout>
              <MapCallOut store={store} />
            </MapView.Callout>
          </MapView.Marker>
        </Map>
      </View>
    </>
  );
};

// import React, { useContext, useState, useEffect } from "react";
// import { StyleSheet, View, Dimensions, Text } from "react-native";
// import MapView from "react-native-maps";

// // import { SafeArea } from "../../../components/utilities/safe-area.component";
// import { Map } from "./map.elements";
// import { Search } from "../components/search.component";
// import { LocationContext } from "../../../services/location/location.context";
// import { RestaurantContext } from "../../../services/restaurants/mock/restaurants.context";
// import { MapCallOut } from "../components/map.callout.component";

// export const MapScreen = () => {
//   const [latDelta, setLatDelta] = useState(0);
//   const { location } = useContext(LocationContext);
//   const { lat, lng, viewport } = location;
//   console.log("this is viewport at MapScreen:", viewport);
//   const { restaurants = [] } = useContext(RestaurantContext);

//   useEffect(() => {
//     const northeastLat = viewport.northeast.lat;
//     const southwestLat = viewport.southwest.lat;
//     const latDelta = northeastLat - southwestLat;
//     setLatDelta(latDelta);
//   }, [location, viewport]);

//   console.log("latDelta:", latDelta);
//   return (
//     <>
//       <View>
//         <Search />
//         <Map
//           region={{
//             latitude: lat,
//             longitude: lng,
//             latitudeDelta: latDelta,
//             longitudeDelta: 0.02,
//           }}
//         >
//           {restaurants.map((restaurant) => {
//             return (
//               <MapView.Marker
//                 key={restaurant.name}
//                 title={restaurant.name}
//                 coordinate={{
//                   latitude: restaurant.geometry.location.lat,
//                   longitude: restaurant.geometry.location.lng,
//                 }}
//               >
//                 <MapView.Callout>
//                   <MapCallOut restaurant={restaurant} />
//                 </MapView.Callout>
//               </MapView.Marker>
//             );
//           })}
//         </Map>
//       </View>
//     </>
//   );
// };
