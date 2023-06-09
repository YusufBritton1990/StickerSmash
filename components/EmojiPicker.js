import {Modal, View, Text, Pressable, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons/MaterialIcons';

export default function CircleButton({ isVisible, onClose, children }) {
   return (
      <Modal animationType='slide' transparent={true} visible={isVisible}>
         <View style={styles.modalContent}>
            <View style={styles.modalContent}>
               <Text style={styles.title}>Choose a sticker</Text>
               <Pressable onPress={onClose}>
                  <MaterialIcons name="close" color="#fff" size={22} />
               </Pressable>
            </View>
            {children}
         </View>
      </Modal>
   );
      
}

const styles = StyleSheet.create({
   modalContent : {

   },

   titleContainer : {

   },

   title : {

   },

});