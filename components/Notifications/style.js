import { StyleSheet } from 'react-native';
import base_styles from "./../../stylebase/style";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },  
    background: {
        flex: 1,
    },
    toplogoContainer: {
        width: '100%',
        marginTop: base_styles.margin.small_title_text_top_margin,
        alignItems: "center",
    },
    titleContainer: {
        width: '100%',
        marginTop: base_styles.margin.normal_space_margin,
        alignItems: 'center',
    },
    listContainer: {
        flex: 1,
        marginTop: base_styles.margin.normal_space_margin,
        alignItems: 'center',
    },
    detailContainer: {
        flex: 1,
        marginTop: base_styles.margin.normal_space_margin,
        alignItems: 'center',
        padding: 10,
        width: '80%',
        marginLeft: '10%',
        borderRadius: base_styles.size.normal_flatlist_border_radius,
        borderColor: base_styles.color.normal_border_color,
        borderWidth: base_styles.size.normal_border_width,
        backgroundColor: base_styles.color.normal_primary_opacity_color,
    },
    titleNotificationContainer: {
        borderBottomWidth: base_styles.size.normal_border_width,
        borderBottomColor: base_styles.color.normal_border_color,
        padding: 5,
        width: '100%',
    },
    textContainer: {
        flex: 1,
        paddingTop: 30,
    },
    flatList: {
        width: base_styles.size.normal_flatlist_width,
        borderRadius: base_styles.size.normal_flatlist_border_radius,
        borderColor: base_styles.color.normal_border_color,
        borderWidth: base_styles.size.normal_border_width,
        height: '100%',
        backgroundColor: base_styles.color.normal_primary_opacity_color,
        paddingTop: 10,        
    },
    buttonContainer: {
        marginBottom: base_styles.margin.normal_space_margin,
        marginTop: base_styles.margin.normal_space_margin,
        width: '100%',
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
        backgroundColor: base_styles.color.normal_button_black_color,
        justifyContent: "center",
    },
    text: {
        color: base_styles.color.noraml_text_font_color,
        textAlign: "center",
    },
    titleText: {
        color: base_styles.color.noraml_text_font_color,
        fontSize: base_styles.size.title_text_font_size,
        fontWeight: base_styles.size.normal_text_title_font_weight,
        textAlign: 'center',
    },
    listItemContainer: {
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#FFF",
        borderTopWidth: 1,
        borderTopColor: "#FFF",
        justifyContent: "center",
    },
    menuIcon: {
        ...base_styles.position.top_back_image_position,
        position:"absolute", 
        zIndex:base_styles.zIndex.normal_image_z_index,
    }
});

export default styles;