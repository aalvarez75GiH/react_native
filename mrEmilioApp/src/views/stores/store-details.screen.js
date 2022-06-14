import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { SafeArea } from "../../global_components/safe-area.component";
import { StoreCardView } from "./store.card";
import { Spacer } from "../../global_components/optimized.spacer.component";
import { ProductsToSaleContainer, ProductToSale } from "./store.card.elements";
import {
  storeMenuRequestByID,
  menuInfoTransformed,
} from "../../infraestructure/services/stores/stores.services";

export const StoreDetailScreen = ({ route }) => {
  const { store } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState(null);

  const retrieveMenu = (id) => {
    setIsLoading(true);
    storeMenuRequestByID(id)
      .then(menuInfoTransformed)
      .then((menuResult) => {
        console.log("menu result:", menuResult);
        setIsLoading(false);
        setMenu(menuResult);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  //   console.log("store at storeDetailsScreen:", store);
  useEffect(() => {
    retrieveMenu(store.id);
    // console.log(test);
  }, []);
  const renderingProductToSale = menu.map((product) => {
    return (
      <>
        <Spacer />
        <ProductToSale />
      </>
    );
  });

  return (
    <SafeArea>
      <ScrollView>
        <StoreCardView store={store} />
        <Spacer />
        <ProductsToSaleContainer elevation={5}>
          {renderingProductToSale}
        </ProductsToSaleContainer>
      </ScrollView>
    </SafeArea>
  );
};
