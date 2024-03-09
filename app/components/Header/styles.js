import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
   $white: '#fff',

   header: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      '@media ios': {
         paddingTop: 20,
      },
      '@media android': {
         paddingTop: StatusBar.currentHeight,
      },
      alignItems: "flex-end",
      marginHorizontal: 20,
    },
})