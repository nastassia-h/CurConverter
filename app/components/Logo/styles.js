import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width/1.4;

export default EStyleSheet.create({
   $largeContainerSize: imageWidth,
   $smallContainerSize: imageWidth/2,
   container: {
      alignItems: 'center',
   },

   conatinerImage: {
      // width: '$largeContainerSize',
      // height: '$largeContainerSize',
      resizeMode: 'contain',
   },

   text: {
      fontWeight: 'bold',
      fontSize: 28,
      color: '$white',
      letterSpacing: 1.3,
      paddingVertical: 8,
   }
})