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
    questionText: {
        textAlign: "center",
        fontWeight: base_styles.font.normal_text_title_font_weight,
        color: base_styles.color.normal_text_title_font_color,
        fontSize: base_styles.size.title_text_font_size,
        marginBottom: base_styles.margin.normal_space_margin,
    },
    questionContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: '100%',
    },
    textInput: {
        height:             base_styles.size.normal_text_input_height,
        borderRadius:       base_styles.size.normal_text_border_radius, 
        textAlign:          "center",
        marginTop:          base_styles.margin.normal_space_margin,
        color:              base_styles.color.normal_text_input_font_color,
        backgroundColor:    base_styles.color.normal_button_third_color,
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
    questionPanel: {
        padding: 10,
        height: '50%',
        marginLeft: 30, 
        marginRight: 30,
        backgroundColor: base_styles.color.normal_button_primary_color,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
    },
    buttonContainer: {
        marginTop: '10%',
        flexDirection: "row",
        width: '100%',
    },
    backButton: {
        backgroundColor: base_styles.color.normal_black_color,
        height: base_styles.size.normal_button_height,
        borderRadius: base_styles.size.normal_button_border_radius,
        marginRight: 5,
        marginLeft: 10,
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    nextButton: {
        backgroundColor: base_styles.color.normal_green_color,
        height: base_styles.size.normal_button_height,
        borderRadius: base_styles.size.normal_button_border_radius,
        marginLeft: 5,
        marginRight: 10,
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    checkIcon: {
        ...base_styles.position.top_right_check_icon_position,
        position: 'absolute',
        right: 10,
        top: 10,
    },
});

export default styles;