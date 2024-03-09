import React from "react";
import { Text } from "react-native";
import styles from "./styles";
import PropTypes from 'prop-types';

const LastConverted = ({ base, quote, conversionRate, date }) => (
   <Text style={styles.text}>
       1 {base} = {conversionRate} {quote} as of {date}
   </Text>
);

LastConverted.propTypes = {
   base: PropTypes.string,
   quote: PropTypes.string,
   conversionRate: PropTypes.string,
   date: PropTypes.string
};

export default LastConverted;