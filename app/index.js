import React from "react";
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigation from "./config/Navigation";
import { ConversionContextProvider } from "./util/ConversionContext";
import { api } from "./util/api"

api("/latest?base=USD")
  .then(res => console.log(res))
  .catch(err => console.log("err", err))

EStyleSheet.build({
   $primaryBlue: '#4f6d7a',
   $white: '#fff',
   $border: '#e2e2e2',
   $inputText: '#797979',
   $lightGray: '#f0f0f0',
   $darkText: '#343434',
})

export default () => (
   <ConversionContextProvider>
      <Navigation/>
   </ConversionContextProvider>
);