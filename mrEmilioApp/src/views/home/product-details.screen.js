import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";

import { SafeArea } from "../../global_components/safe-area.component";
import { ProductCardView } from "./product.card";
import { ProductCard2View } from "./product.card_2";
import { Spacer } from "../../global_components/optimized.spacer.component";

export const ProductDetailScreen = ({ route }) => {
  // console.log("route.params:", route.params);
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { product } = route.params;
  return (
    <SafeArea>
      <ScrollView>
        <ProductCard2View product={product} />
        {/* <Spacer />
        <List.Accordion
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          expanded={breakfastExpanded}
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          onPress={() => setLunchExpanded(!lunchExpanded)}
          expanded={lunchExpanded}
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
          expanded={dinnerExpanded}
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom" />
          <List.Item title="Stake Frites" />
        </List.Accordion>
        <List.Accordion
          onPress={() => setDrinksExpanded(!drinksExpanded)}
          expanded={drinksExpanded}
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion> */}
      </ScrollView>
    </SafeArea>
  );
};
