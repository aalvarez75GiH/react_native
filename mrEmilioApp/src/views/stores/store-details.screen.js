import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { SafeArea } from "../../global_components/safe-area.component";
import { StoreCardView } from "./store.card";
import { StoreCardDetailsView } from "./store.card.details";
import { Spacer } from "../../global_components/optimized.spacer.component";
import {
  ProductsToSaleContainer,
  ProductToSaleTitleContainer,
  ProductsToSaleTitle,
  ProductMiniCardContainer,
} from "./store.card.elements";
import {
  storeMenuRequestByID,
  menuInfoTransformed,
} from "../../infraestructure/services/stores/stores.services";
import { ProductMiniCard } from "./productMiniCard";

export const StoreDetailScreen = ({ route }) => {
  const { store, navigation } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState(null);

  const retrieveMenu = (id) => {
    setIsLoading(true);
    storeMenuRequestByID(id)
      .then(menuInfoTransformed)
      .then((menuResult) => {
        // console.log("menu result:", menuResult);
        setIsLoading(false);
        setMenu(menuResult);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    retrieveMenu(store.id);
  }, []);

  const renderingProductToSale = menu.map((product) => {
    return <ProductMiniCard product={product} key={product.id} />;
  });

  return (
    <SafeArea>
      <ScrollView>
        <StoreCardDetailsView store={store} navigation={navigation} />
        <Spacer />
        <ProductsToSaleContainer elevation={5}>
          <Spacer />
          <ProductToSaleTitleContainer>
            <ProductsToSaleTitle>
              Productos que puedes encontrar en esta tienda
            </ProductsToSaleTitle>
          </ProductToSaleTitleContainer>
          <Spacer position="bottom" size="medium" />
          <ProductMiniCardContainer>
            {renderingProductToSale}
          </ProductMiniCardContainer>
        </ProductsToSaleContainer>
      </ScrollView>
    </SafeArea>
  );
};
