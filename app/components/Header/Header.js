import React from "react";
import { TouchableOpacity} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const Header = ({navigation}) => (
   <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={() => navigation.push("Options")}>
         <Entypo name="cog" size={32} color={styles.$white} />
      </TouchableOpacity>
   </SafeAreaView>
);

export default Header;