import { StyleSheet } from 'react-native';
import base_styles from "../../../stylebase/style";

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
    },  
    logoContainer: {
        width: '100%',
        alignItems: "center",
        marginTop: base_styles.margin.normal_logo_top_margin,
    },
    emailContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    titleText: {
        color: base_styles.color.noraml_text_font_color,
        fontSize: base_styles.size.title_text_font_size,
        fontWeight: base_styles.size.normal_text_title_font_weight,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        marginBottom: base_styles.margin.normal_space_margin,
        alignItems: "center",
    },
    button: {
        width: base_styles.size.normal_button_width,
        borderWidth: base_styles.size.normal_border_width,
        borderColor: base_styles.color.normal_button_border_color,
        borderRadius: base_styles.size.normal_border_radius,
        marginBottom: base_styles.margin.normal_space_margin,
        alignItems: "center",
        height: base_styles.size.normal_button_height,
        backgroundColor: base_styles.color.normal_red_color,
        justifyContent: "center",
        marginTop: base_styles.margin.normal_space_margin + base_styles.size.normal_text_input_height,
    },
    button_back: {
        width: base_styles.size.normal_button_width,
        borderWidth: base_styles.size.normal_border_width,
        borderColor: base_styles.color.normal_button_border_color,
        borderRadius: base_styles.size.normal_border_radius,
        marginBottom: base_styles.margin.normal_space_margin,
        alignItems: "center",
        height: base_styles.size.normal_button_height,
        backgroundColor: base_styles.color.normal_button_black_color,
        justifyContent: "center",
    },
    text: {
        color: base_styles.color.noraml_text_font_color,
        textAlign: "center",
    },
    menuIcon: {
        ...base_styles.position.top_back_image_position,
        position:"absolute", 
        zIndex:base_styles.zIndex.normal_image_z_index,
    },
});

export default styles;