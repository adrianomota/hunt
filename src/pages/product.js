import React from 'react';

import { WebView } from "react-native";

const Product = ({ navigation }) => (
    <WebView source={{uri: navigation.state.params.product.url}}/>
)

export default Product;