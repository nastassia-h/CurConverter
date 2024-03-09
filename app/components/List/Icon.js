import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = ({ visible, checkmark }) => {
  if (visible) {
    const iconStyles = [styles.icon];
    iconStyles.push(styles.iconVisible);

    return (
      <View style={iconStyles}>
        {checkmark
          ? <Image
            source={require('./images/check.png')}
            style={styles.checkIcon}
            resizeMode="contain"
          />
          : null}
      </View>
    );
  }

  return <View style={styles.icon} />;
};

Icon.propTypes = {
  visible: PropTypes.bool,
  checkmark: PropTypes.bool,
};

export default Icon;