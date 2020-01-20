import { StyleSheet } from 'react-native';
import base_styles from "./../../stylebase/style";

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
    meContainer: {
        width: '100%',
        alignItems: "center",
        marginTop: base_styles.margin.container_space_margin,
        marginBottom: base_styles.margin.container_space_margin,
        padding: 10,
    },
    checkIcon: {
        ...base_styles.position.top_right_check_icon_position,
        position: 'absolute',
        right: 10,
        top: 10,
    },
    meSelect: {
        borderRadius: base_styles.size.normal_border_radius,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: base_styles.size.big_button_height,
    },
    text: {
        color: base_styles.color.noraml_text_font_color,
        textAlign: "center",
    },
    buttonContainer: {
        marginTop: base_styles.margin.container_space_margin,
        marginBottom: base_styles.margin.container_space_margin,
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
    },
    backbutton: {
        width: base_styles.size.normal_button_width,
        flex: 1,
        borderColor: base_styles.color.normal_button_border_color,
        borderRadius: base_styles.size.normal_border_radius,
        marginBottom: base_styles.margin.normal_space_margin,
        alignItems: "center",
        height: base_styles.size.normal_button_height,
        backgroundColor: base_styles.color.normal_button_black_color,
        justifyContent: "center",
        marginRight: 20,
        marginLeft: 40,
    },
    nextbutton: {
        width: base_styles.size.normal_button_width,
        flex: 1,
        borderColor: base_styles.color.normal_button_border_color,
        borderRadius: base_styles.size.normal_border_radius,
        marginBottom: base_styles.margin.normal_space_margin,
        alignItems: "center",
        height: base_styles.size.normal_button_height,
        backgroundColor: base_styles.color.normal_green_color,
        justifyContent: "center",
        marginLeft: 20,
        marginRight: 40,
    },
    familyButton: {
        borderColor: base_styles.color.normal_button_border_color,
        borderRadius: base_styles.size.normal_border_radius,
        marginBottom: base_styles.margin.normal_space_margin,
        alignItems: "center",
        height: base_styles.size.normal_button_height,
        justifyContent: "center",
        flex: 1,
        marginRight: 2,
        flexDirection: "row",
    },
    familyButton_gradient: {
        flex: 1,
        height: '100%',
        borderColor: base_styles.color.normal_button_border_color,
        borderRadius: base_styles.size.normal_border_radius,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 2,
    }, 
    familyButton_selected: {
        width: "100%",
        borderColor: base_styles.color.normal_button_border_color,
        borderRadius: base_styles.size.normal_border_radius,
        marginBottom: base_styles.margin.normal_space_margin,
        alignItems: "center",
        height: base_styles.size.normal_button_height,
        justifyContent: "center",
        flex: 1,
        marginRight: 2,
    },
    familyContainer: {
        flex: 1,
        padding: 10,
    },
    famliyButtonContainer: {
        flex: 1,
        flexDirection: "row",
        width: '100%',
        padding: 3,
    },
    peopleImageContainer: {
        backgroundColor: base_styles.color.noraml_light_green_color,
        borderRadius: base_styles.size.normal_button_height / 2,
        width: base_styles.size.normal_button_height,
        height: base_styles.size.normal_button_height,
        justifyContent: "center",
        alignItems: "center",
    },
    peopleImageContainer_selected: {
        backgroundColor: base_styles.color.noraml_dark_green_color,
        borderRadius: base_styles.size.normal_button_height / 2,
        width: base_styles.size.normal_button_height,
        height: base_styles.size.normal_button_height,
        justifyContent: "center",
        alignItems: "center",
    },
    famliyButtonGroupContainer: {
        flexDirection: "row",
        width: "100%",
    }
});

export default styles;