
var React = require('react-native');

var {PixelRatio} = React;

var QUESTION_TEXT_FONT_SIZE   = 18;
if(PixelRatio.get() <= 1)
{
    QUESTION_TEXT_FONT_SIZE = 12;
}
else if(PixelRatio.get() <= 1.5)
{
    QUESTION_TEXT_FONT_SIZE = 25;
}
else if(PixelRatio.get() <= 2)
{
    QUESTION_TEXT_FONT_SIZE = 25;
}
else
{
    QUESTION_TEXT_FONT_SIZE = 25;
}

const base_styles = {
    margin: {
        normal_space_margin: 10,
        small_title_text_top_margin: 30,        
        big_button_space_margin_left: 10,       
        normal_title_text_top_margin: 60, 
        small_select_option_margin: 5,
        normal_logo_top_margin: 60,
        container_space_margin: 30,
    },
    padding: {
        normal_container_bottom_marign: 30,
        small_selection_option_padding: 10,
    },
    size: {
        big_button_height: 45,
        normal_button_height: 35,
        small_button_height: 25,
        normal_button_border_radius: 25,
        normal_text_input_height: 35,        
        small_text_input_height: 25,
        small_select_option_height: 85,

        normal_text_border_radius: 20,
        small_text_border_radius: 15,
        normal_border_width: 1,
        normal_button_width: '80%',
        noraml_text_input_width: '80%',
        normal_flatlist_width: '80%',
        normal_flatlist_border_radius: 30,
        small_button_width: '40%',
        small_select_option_border_raidus: 10,

        title_text_font_size: 20,
        normal_border_radius: 20,
        question_text_font_size: QUESTION_TEXT_FONT_SIZE,
    },
    zIndex: {
        normal_image_z_index: 100,
    },
    position: {
        top_back_image_position: {
            top: 30, 
            left: 20
        },
        top_right_check_icon_position: {
            right: 5,
            left: 'auto',
            top: 5,
        }
    },
    font: {
        normal_text_title_font_weight: "bold",        
    },
    color: {
        normal_text_title_font_color: "#FFF",
        noraml_text_font_color: "#FFF",
        normal_text_input_font_color: "#FFF",
        normal_text_input_border_color: "#FFF",
        normal_button_primary_color: "#09A2E1",
        normal_button_primary_opacity_color: "rgba(22, 129, 177, 0.7)",
        noraml_button_selected_primary_opacity_color: "rgba(29, 87, 112, 0.7)",
        normal_primary_opacity_color: "rgba(22, 129, 177, 0.7)",
        normal_button_secondary_color: "#8FBD2C",
        normal_button_black_color: "rgba(0, 0, 0, 0.5)",
        normal_button_third_color: "#0C4F6A",
        normal_button_border_color: "#FFF",
        normal_green_color: "#209729",
        normal_red_color: "#87353B",
        normal_border_color: "#FFF",
        noraml_light_green_color: "#91BD28",
        noraml_dark_green_color: "#3E581F",
        normal_black_color: "#1D1D1D",
    },

    gradient: {
        selected_gradient: 'linear-gradient(to right, #03597C, #3F581E)',
        primary_gradient: 'linear-gradient(to right, #07A3E2, #8BBD31)',
    }
};

export default base_styles;