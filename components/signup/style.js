import { StyleSheet } from 'react-native';
import base_styles from "./../../stylebase/style";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },  
    signupText: {
        fontWeight: base_styles.font.normal_text_title_font_weight,
        color: base_styles.color.normal_text_title_font_color,
        textAlign: 'center',
        marginTop: base_styles.margin.small_title_text_top_margin,
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
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        marginTop: base_styles.margin.normal_space_margin,
    },
    textInput: {
        width:              base_styles.size.noraml_text_input_width,
        borderColor:        base_styles.color.normal_text_input_border_color,
        height:             base_styles.size.normal_text_input_height,
        borderRadius:       base_styles.size.normal_text_border_radius, 
        borderWidth:        base_styles.size.normal_border_width,
        textAlign:          "center",
        marginTop:          base_styles.margin.normal_space_margin,
        color:              base_styles.color.normal_text_input_font_color,
    },
    textInput_keyboard: {
        width:              base_styles.size.noraml_text_input_width,
        borderColor:        base_styles.color.normal_text_input_border_color,
        height:             base_styles.size.small_text_input_height,
        borderRadius:       base_styles.size.small_text_border_radius, 
        borderWidth:        base_styles.size.normal_border_width,
        textAlign: "center",
        marginTop:          base_styles.margin.normal_space_margin,
        color: '#FFF',
    },
    getstarted_btn: {
        width:              base_styles.size.noraml_text_input_width,
        height:             base_styles.size.normal_text_input_height,
        borderRadius:       base_styles.size.normal_text_border_radius,
        backgroundColor:    base_styles.color.normal_button_primary_color,
        justifyContent:     "center",
        borderColor:        base_styles.color.normal_text_input_border_color,
        borderWidth:        base_styles.size.normal_border_width,
    },
    getstarted_btn_keyboard: {
        flex: 1,
        marginLeft:         base_styles.margin.big_button_space_margin_left,
        height:             base_styles.size.small_text_input_height,
        borderRadius:       base_styles.size.small_text_border_radius,
        backgroundColor:    base_styles.color.normal_button_primary_color,
        justifyContent:     "center",
        borderColor:        base_styles.color.normal_text_input_border_color,
        borderWidth:        base_styles.size.normal_border_width,
    },
    buttonContainer: {
        width:              '100%',
        justifyContent:     'center',
        alignItems:         'center',
        paddingBottom:      base_styles.padding.normal_container_bottom_marign
    },
    buttonContainer_keyboard: {
        width:              '100%',
        paddingLeft:        '5%',
        paddingRight:       '5%',
        justifyContent:      'center',
        alignItems:         'center',
        flexDirection:      'row-reverse',
        marginTop:          base_styles.margin.normal_space_margin,
        marginBottom:       base_styles.margin.normal_space_margin,
    },
    text: {
        fontWeight:         base_styles.font.normal_text_title_font_weight,
        color:              base_styles.font.noraml_text_font_color,
        textAlign:          'center'
    },
    back_btn: {
        backgroundColor:    base_styles.color.normal_button_black_color,
        height:             base_styles.size.normal_text_input_height,
        borderRadius:       base_styles.size.normal_text_border_radius,
        justifyContent:     "center",
        borderColor:        base_styles.color.normal_text_input_border_color,
        borderWidth:        1,
        width:              base_styles.size.noraml_text_input_width,
        marginTop:          base_styles.margin.normal_space_margin,
    },
    back_btn_keyboard: {
        flex: 1,
        marginRight:        base_styles.margin.normal_space_margin,
        backgroundColor:    base_styles.color.normal_button_black_color,
        height:             base_styles.size.small_text_input_height,
        borderRadius:       base_styles.size.normal_text_border_radius,
        justifyContent:     "center",
        borderColor:        base_styles.color.normal_text_input_border_color,
        borderWidth:        base_styles.size.normal_border_width,
        width:              base_styles.size.normal_border_width,
    },  
    back: {
        position: 'absolute',
        zIndex:             base_styles.zIndex.normal_image_z_index,
        top:                base_styles.position.top_back_image_position.top,
        left:               base_styles.position.top_back_image_position.left,
    }
});

export default styles;