import { StyleSheet } from 'react-native';
import base_styles from "./../../../stylebase/style";

const styles = StyleSheet.create({
    background: {
        flex: 1,        
        justifyContent: "center",
    },
    text: {
        fontWeight:         base_styles.font.normal_text_title_font_weight,
        color:              base_styles.color.noraml_text_font_color,
        textAlign:          'center'
    },
    titleText: {
        textAlign: "center",
        fontWeight: base_styles.font.normal_text_title_font_weight,
        color: base_styles.color.normal_text_title_font_color,
        fontSize: base_styles.size.question_text_font_size,
    },
    mainContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: '100%',
        width: '100%',
    },
    selectButton: {
        backgroundColor: base_styles.color.normal_button_third_color,
        height: base_styles.size.normal_button_height,
        borderRadius: base_styles.size.normal_button_border_radius,
        marginRight: 5,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center",
        width: '80%',
        marginTop: base_styles.margin.normal_space_margin
    },
    logoContainer: {
        padding: 10,
        width: '80%',
        backgroundColor: base_styles.color.normal_button_primary_color,
        borderRadius: 20,
        alignItems: "center",
    },
    logo: {
        backgroundColor: "#FFF", 
        borderWidth: 5,
        borderColor: base_styles.color.normal_button_primary_color,
        transform: [
            {translateY: '-50%'}
        ]
    },
    mainLogoContainer: {
        marginTop: base_styles.margin.normal_space_margin,
        alignItems: "center",
        width: "100%",
    },
    primaryButton: {
        backgroundColor: base_styles.color.normal_button_primary_color,
        height: base_styles.size.normal_button_height,
        borderRadius: base_styles.size.normal_button_border_radius,
        width: base_styles.size.normal_button_width,
        marginTop: base_styles.margin.normal_space_margin,
        alignItems: "center",
        justifyContent: "center",
    },
    backButton: {
        backgroundColor: base_styles.color.normal_black_color,
        height: base_styles.size.normal_button_height,
        borderRadius: base_styles.size.normal_button_border_radius,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        width: '50%',
    },
});

export default styles;