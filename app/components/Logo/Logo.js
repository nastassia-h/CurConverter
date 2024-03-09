import React, {Component} from "react";
import styles from "./styles";
import { View, Text, Keyboard, Animated, Platform } from "react-native";

class Logo extends Component {
   constructor(props) {
      super(props);

      this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
   }

   componentDidMount() {
      let showListener = 'keyboardWillShow';
      let hideListener = 'keyboardWillHide';
      if (Platform.OS === 'android') {
         showListener = 'keyboardDidShow';
         hideListener = 'keyboardDidHide';
      }
      this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
      this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
   }

   componentWillUnmount() {
      this.keyboardShowListener.remove();
      this.keyboardHideListener.remove();
   }

   keyboardShow = () => {
      Animated.timing(this.containerImageWidth, {
         toValue: styles.$smallContainerSize,
         duration: 250,
         useNativeDriver: false,
      }).start();
   };

   keyboardHide = () => {
      Animated.timing(this.containerImageWidth, {
         toValue: styles.$largeContainerSize,
         duration: 250,
         useNativeDriver: false,
      }).start();
   };


   // useEffect(() => {
   //    const showListener = Keyboard.addListener("keyboardDidShow", () =>
   //      setScrollEnabled(true)
   //    )
   //    const hideListener = Keyboard.addListener("keyboardDidHide", () =>
   //      setScrollEnabled(false)
   //    )
  
   //    return () => {
   //      showListener.remove()
   //      hideListener.remove()
   //    }
   //  }, [])

   render() {
      const containerImageStyle = [
         styles.conatinerImage,
         {
            width: this.containerImageWidth, height: this.containerImageWidth
         },
      ];

      return (
         <View style={styles.container}>
            <Animated.Image 
               style={containerImageStyle} 
               source={require('./images/logo.png')}/>
            <Text style={styles.text}>Currency Converter</Text>
         </View>
      );
   }
}

export default Logo;