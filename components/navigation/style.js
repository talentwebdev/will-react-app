import { StyleSheet } from 'react-native';
import base_styles from "./../../stylebase/style";

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
    },  
    logoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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
        backgroundColor: base_styles.color.normal_button_primary_opacity_color,
        justifyContent: "center",
    },
    button_selected: {
        width: base_styles.size.normal_button_width,
        borderWidth: base_styles.size.normal_border_width,
        borderColor: base_styles.color.normal_button_border_color,
        borderRadius: base_styles.size.normal_border_radius,
        marginBottom: base_styles.margin.normal_space_margin,
        alignItems: "center",
        height: base_styles.size.normal_button_height,
        backgroundColor: base_styles.color.noraml_button_selected_primary_opacity_color,
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
    }
});

export default styles;