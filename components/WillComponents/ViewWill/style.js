import { StyleSheet } from 'react-native';
import base_styles from "./../../../stylebase/style";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    willview: {
        flex: 1,
    },
    nextButton: {
        backgroundColor: base_styles.color.normal_green_color,
        height: base_styles.size.normal_button_height,
        borderRadius: base_styles.size.normal_button_border_radius,
        marginLeft: 5,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontWeight:         base_styles.font.normal_text_title_font_weight,
        color:              base_styles.color.noraml_text_font_color,
        textAlign:          'center'
    },
});

export default styles;