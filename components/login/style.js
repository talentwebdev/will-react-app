import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },  
    container_keyboard: {
        justifyContent: "center",
    },
    loginText: {
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        marginTop: 30,
    },
    background: {
        flex: 1,        
    },
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }, 
    textInput: {
        width: '80%',
        borderColor: '#FFF',
        height: 35,
        borderRadius: 20, 
        borderWidth: 1,
        textAlign: "center",
        marginTop: 10,
        color: '#FFF',
    },
    text: {
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center'
    },
    back_btn: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 35,
        borderRadius: 20,
        justifyContent: "center",
        borderColor: "#FFF",
        borderWidth: 1,
        width: '80%',
        marginBottom: 20,
        marginLeft: '10%'
    },
    login_btn: {
        width: '80%',
        height: 35,
        borderRadius: 20,
        backgroundColor: "#09A2E1",
        justifyContent: "center",
        borderColor: "#FFF",
        borderWidth: 1,
        marginTop: 10,
    },
    logoImage: {
        width: '80%',
        height: '25%',
        resizeMode: 'stretch'
    },
});

export default styles;