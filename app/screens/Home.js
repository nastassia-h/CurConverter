import React, {useState, useContext} from 'react';
import {StatusBar, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import { ConversionContext } from '../util/ConversionContext';
import { Container, styles } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import ClearButton from '../components/Button/ClearButton';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const Home = ({navigation}) => {
   const {
      baseCurrency,
      quoteCurrency,
      swapCurrencies,
      rates,
      date,
      isLoading
    } = useContext(ConversionContext);
   const [value, setValue] = useState("100");
   let conversionRate = rates[quoteCurrency];

   return (
      <Container>
         <StatusBar translucent={false} barStyle="light-content"/>
         <Header navigation={navigation}/>
         <KeyboardAvoidingView behavior='padding'>
            <Logo/>
            {isLoading ? (
                <ActivityIndicator color={'white'} size="large" />
            ) : (
               <>
                  <InputWithButton
                     buttonText={baseCurrency}
                     onPress={() => 
                        navigation.push("CurrencyList", { 
                           title: "Base Currency",
                           isBaseCurrency: true
                        })}
                     defaultValue={value}
                     keyboardType='numeric'
                     onChangeText={text => setValue(text)}
                  />
                  <InputWithButton
                     buttonText={quoteCurrency}
                     onPress={() => 
                        navigation.push("CurrencyList", { 
                           title: "Quote Currency",
                        })}
                     editable={false}
                     value={
                        value && `${(parseFloat(value) * conversionRate)?.toFixed(2)}`
                     }
                  />
                  <LastConverted 
                     base={baseCurrency} 
                     quote={quoteCurrency} 
                     date={date} 
                     conversionRate={conversionRate?.toFixed(4)}/>
                  <ClearButton
                     text="Reverse Currencies"
                     onPress={swapCurrencies}
                  />
               </>
            )}
         </KeyboardAvoidingView>
      </Container>
   )
}

export default Home;