import { StyleSheet } from 'react-native';
import base_styles from "../../stylebase/style";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },  
    container_keyboard: {
        justifyContent: "center",
    },
    loginText: {
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        marginTop: 30,
    },
    background: {
        flex: 1,        
    },
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }, 
    inputContainer_keyboard: {
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        width: '80%',
        borderColor: '#FFF',
        height: 35,
        borderRadius: 20, 
        borderWidth: 1,
        textAlign: "center",
        marginTop: 10,
        color: '#FFF',
    },
    textInput_keyboard: {
        width: '80%',
        borderColor: '#FFF',
        height: 35,
        borderRadius: 20, 
        borderWidth: 1,
        textAlign: "center",
        marginTop: 10,
        color: '#FFF',
    },
    text: {
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center'
    },
    back_btn: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 35,
        borderRadius: 20,
        justifyContent: "center",
        borderColor: "#FFF",
        borderWidth: 1,
        width: '80%',
        marginBottom: 20,
        marginLeft: '10%'
    },
    back_btn_keyboard: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 35,
        borderRadius: 20,
        justifyContent: "center",
        borderColor: "#FFF",
        borderWidth: 1,
        width: '80%',
        marginBottom: 10,
        marginLeft: '10%'
    },
    login_btn: {
        width: '80%',
        height: 35,
        borderRadius: 20,
        backgroundColor: "#09A2E1",
        justifyContent: "center",
        borderColor: "#FFF",
        borderWidth: 1,
        marginTop: 10,
    },
    login_btn_keyboard: {
        width: '80%',
        height: 35,
        borderRadius: 20,
        backgroundColor: "#09A2E1",
        justifyContent: "center",
        borderColor: "#FFF",
        borderWidth: 1,
        marginTop: 10,
    },
    logoImage: {
        width: '80%',
        height: '25%',
        resizeMode: 'stretch'
    },
    reset_btn: {
        width: base_styles.size.normal_button_width,
        borderWidth: base_styles.size.normal_border_width,
        borderColor: base_styles.color.normal_button_border_color,
        borderRadius: base_styles.size.normal_border_radius,
        marginBottom: base_styles.margin.normal_space_margin,
        alignItems: "center",
        height: base_styles.size.normal_button_height,
        backgroundColor: base_styles.color.normal_button_primary_opacity_color,
        justifyContent: "center",
        marginLeft: '10%'
    },
    reset_btn_keyboard: {
        width: base_styles.size.normal_button_width,
        borderWidth: base_styles.size.normal_border_width,
        borderColor: base_styles.color.normal_button_border_color,
        borderRadius: base_styles.size.normal_border_radius,
        marginBottom: base_styles.margin.normal_space_margin,
        alignItems: "center",
        height: base_styles.size.normal_button_height,
        backgroundColor: base_styles.color.normal_button_primary_opacity_color,
        justifyContent: "center",
        marginLeft: '10%'
    }
});

export default styles;