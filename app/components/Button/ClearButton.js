import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import PropTypes from 'prop-types';
import styles from "./styles";

const ClearButton = ({text, onPress}) => (
   <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
         <Text style={styles.buttonText}>{text}</Text>
      </View>
   </TouchableOpacity>
);

ClearButton.propTypes = {
   text: PropTypes.string,
   onPress: PropTypes.func
}

export default ClearButton;