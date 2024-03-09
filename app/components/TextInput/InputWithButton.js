import React from "react";
import { View, TouchableHighlight, TextInput, Text } from "react-native";
import color from 'color';
import PropTypes from 'prop-types';
import styles from "./styles";

const InputWithButton = (props) => {
   const {onPress, buttonText, editable = true} = props;

   const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier)

   const containerStyles = [styles.container];
   if (!editable) {
      containerStyles.push(styles.containerDisabled);
   }

   return (
      <View style={containerStyles}>
         <TouchableHighlight 
            underlayColor={underlayColor}
            style={styles.buttonContainer} 
            onPress={onPress}
         >
            <Text style={styles.buttonText}>{buttonText}</Text>
         </TouchableHighlight>
         <View style={styles.border}/>
         <TextInput 
            underlineColorAndroid='transparent'
            style={styles.input} {...props}/>
      </View>
   );
}

InputWithButton.propTypes = {
   onPress: PropTypes.func,
   buttonText: PropTypes.string,
   editable: PropTypes.bool
}

export default InputWithButton;