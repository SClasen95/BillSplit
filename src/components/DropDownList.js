
import React, { useState } from "react"
import { Text, StyleSheet, View, TextInput, Pressable, Modal, TouchableOpacity, Image } from "react-native"
import { colors } from "../utils/colors";

const DropDownList = ({label, placeholder, value, onChangeText, style, options, ...props}) => {

    const [isPickerModalVisible, setisPickerModalVisible] = useState(false)
    
    const onSelect = (opt) => {
        onChangeText(opt)
        setisPickerModalVisible(false)
    }


    return (

        <View style={[styles.container]}>
            <Text style={styles.label}>{label}</Text>
            <Pressable onPress={() => setisPickerModalVisible(true)} style={[styles.inputContainer]}>
                {value ? (
                    <Text style={[styles.input, style]}>{value}</Text>
                ):(
                    <Text style={[styles.placeholder, style]}>{placeholder}</Text>
                )}
                <Image style = {styles.arrow} source={require('../assets/back2.png')}/>
            </Pressable>
        
        
           <Modal transparent visible={isPickerModalVisible}>
                <TouchableOpacity activeOpacity={1} onPress={()=>setisPickerModalVisible(false)} style={styles.modalWrapper}>
                    <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                        <Text style={styles.headerTitle}>Select options</Text>
                        {options?.map(opt=>{
                            if(!opt){
                                return null
                            }
                            const selected = value === opt
                            return(
                                <Text onPress={() => onSelect(opt) } style={[styles.optionText, selected ? styles.selectedOption : null]} >{opt}</Text>
                            )                                
                        }
                        )}
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </View>        
    )
}

export default React.memo(DropDownList)

export const styles = StyleSheet.create({
    container:{
        marginBottom: 20
    },
    label: {
        marginLeft: 5,
        paddingVertical: 5,
        fontSize: 16,
        color: colors.black
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 14,
        borderColor: colors.grey,
        flexDirection: 'row',
        alignItems: 'center',
        
    }, 
    input: {
        flex:1,
        fontSize: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 20,
        color: colors.darkGrey,
    },
    placeholder:{
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        color: colors.lightGrey
    },
    arrow:{
        width: 24,
        height: 24,
        marginHorizontal: 16,
        transform: [{rotate:'270deg'}]
    },
    modalWrapper:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems:'center',
        flex:1
    },
    modalContent: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding:16,
        width: '80%'
    },
    headerTitle:{
        color: colors.black,
        marginBottom:16,
        fontSize: 16
    },
    optionText: {
        color: colors.black,
        paddingVertical:4,
        fontSize: 16,
    },
    selectedOption:{
        color: colors.blue,
        fontWeight: 'bold'
    }
})
  
  
  