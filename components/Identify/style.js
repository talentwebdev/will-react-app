import { StyleSheet } from 'react-native';
import base_styles from "./../../stylebase/style";
import { AuthSession } from 'expo';

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    titleContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: base_styles.margin.normal_title_text_top_margin
    },
    titleText: {
        textAlign: "center",
        fontWeight: base_styles.font.normal_text_title_font_weight,
        color: base_styles.color.normal_text_title_font_color,
    },
    identifyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    selectOption: {
        backgroundColor: base_styles.color.normal_button_primary_color,
        width: base_styles.size.small_button_width,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: base_styles.size.small_select_option_border_raidus,
        marginTop: base_styles.margin.small_select_option_margin,
        padding: base_styles.padding.small_selection_option_padding,
        height: base_styles.size.small_select_option_height,
    },
    selectOption_selected: {
        backgroundColor: base_styles.color.normal_button_primary_color,
        width: base_styles.size.small_button_width,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: base_styles.size.small_select_option_border_raidus,
        marginTop: base_styles.margin.small_select_option_margin,
        padding: base_styles.padding.small_selection_option_padding,
        height: base_styles.size.small_select_option_height,
        backgroundColor: base_styles.color.normal_button_third_color,
    },
    checkIcon: {
        ...base_styles.position.top_right_check_icon_position,
        position: 'absolute',
    },
    maleImage: {
        width: 31,
        height: 49,
    },
    femaleImage: {
        width: 31,
        height: 49,
    },
    nonbinaryImage: {
        width: 43,
        height: 58,
    },
    footerContainer: {
        width: '100%',
        marginBottom: base_styles.margin.normal_title_text_top_margin,        
        alignItems: "center",
    },
    nextButton: {
        backgroundColor: base_styles.color.normal_button_secondary_color,        
        justifyContent: "center",
        alignItems: "center",
        width: base_styles.size.small_button_width, 
        height: base_styles.size.normal_button_height,
        borderRadius: base_styles.size.normal_button_border_radius,
    },
    text: {
        color: base_styles.color.noraml_text_font_color,
        textAlign: "center",
    }
});

export default styles;