import React, {useContext} from "react";
import { ConversionContext } from "../util/ConversionContext";
import {FlatList, View, StatusBar} from 'react-native';
import { useSafeArea } from "react-native-safe-area-context"
import { ListItem, Separator } from "../components/List";
import currencies from '../data/currencies';

const CurrencyList = ({navigation, route={}}) => {
   const insets = useSafeArea();
   const {
      baseCurrency,
      quoteCurrency,
      setBaseCurrency,
      setQuoteCurrency,
    } = useContext(ConversionContext)
   const params = route.params || {};
   const { isBaseCurrency } = params

   return (
      <View style={{flex: 1}}>
         <StatusBar barStyle="default" translucent="false"/>
         <FlatList
            data={currencies}
            renderItem={({item}) => 
            <ListItem
               text={item}
               selected={isBaseCurrency ? item === baseCurrency : item === quoteCurrency}
               onPress={() => {
                  isBaseCurrency ? setBaseCurrency(item) : setQuoteCurrency(item);
                  navigation.pop()
                  }}
               />
            }
            keyExtractor={item => item}
            ItemSeparatorComponent={Separator}
            ListFooterComponent={()=>{
               <View style={{paddingBottom: insets.bottom}}/>
            }}
      />
      </View>
   );
} 

export default CurrencyList;