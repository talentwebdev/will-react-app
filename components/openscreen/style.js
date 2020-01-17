import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        color: "#F00",
    },
    background: {
        flex: 1,
        
    },
    logoImage: {
        width: '80%',
        height: '25%',
        resizeMode: 'stretch'
    },
    facebook_btn: {
        width: '80%',
        height: 45,
        borderRadius: 25,
        backgroundColor: "#3B5998",
        justifyContent: "center",
    },
    logoContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30
    },
    text: {
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center'
    },
    signup_container: {
        width: '80%',
        flexDirection: 'row',
        marginTop: 20
    },
    signup_btn: {
        backgroundColor: '#09A2E1',
        height: 45,
        borderRadius: 25,
        justifyContent: "center",
        borderColor: "#FFF",
        borderWidth: 1,
        flex: 1,
        marginRight: 5,
    },
    login_btn: {
        backgroundColor: '#09A2E1',
        height: 45,
        borderRadius: 25,
        justifyContent: "center",
        borderColor: "#FFF",
        borderWidth: 1,
        flex: 1,
        marginLeft: 5,
    }
});

export default styles;