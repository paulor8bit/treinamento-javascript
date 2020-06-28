import React, {Component} from 'react'
import {ImageBackground, Text, StyleSheet, Alert,
        View,  TouchableOpacity} from 'react-native'
import backgroundImage from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'
import AuthInput from '../components/AuthInput'

export default class Auth extends Component {
    state = {
        name: '',
        email: '', 
        password: '', 
        confirmPassword: '', 
        stageNew: true
    }

    signiOrSignup = () => {
        if(this.state.stageNew) {
            Alert.alert('Sucesso', 'Criar a conta')
        } else {
            Alert.alert('Sucesso', 'Logar')
        }
    }
    
    render () {
        return (
            <ImageBackground source={backgroundImage}
            style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}> 
                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'}
                    </Text>
                
                {
                    this.state.stageNew &&

                    <AuthInput icon='user' placeholder='Nome' value={this.state.email}
                    style={styles.input} onChange={email => this.setState({email})}></AuthInput>
                                   
                    
                }
                    
                    <AuthInput icon='at' placeholder='Email' value={this.state.email}
                    style={styles.input} onChange={email => this.setState({email})}></AuthInput>
                     
                     <AuthInput icon='lock' placeholder='Senha' value={this.state.password} secureTextEntry={true}
                    style={styles.input} onChange={password => this.setState({password})}></AuthInput>


{
                    this.state.stageNew &&

                    <AuthInput icon='lock' placeholder='Confirme sua senha' value={this.state.confirmPassword} secureTextEntry={true}
                    style={styles.input} onChange={confirmPassword => this.setState({confirmPassword})}></AuthInput>
                                   
                    
                }
                    <TouchableOpacity onPress={this.signiOrSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {
                                    this.state.stageNew ? 'Registrar' : 'Entrar' 
                                }
                            </Text>
                        </View>
                        
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={{padding: 10}}
                 onPress={ () => this.setState({stageNew: !this.state.stageNew})}>
                <Text style={styles.buttonText}>
                    {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta'}
                </Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create ({ 
    background: {
        flex: 1, 
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center'
    }, 
    title: {
        fontFamily: commonStyles.fontFamily, 
        color: commonStyles.colors.secondary, 
        fontSize: 70, 
        marginBottom: 10
    }, 
    subtitle: {
        fontFamily: commonStyles.fontFamily, 
        color: '#FFF', 
        fontSize: 20
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF',
        padding: 15,
        color: '#000',
        textAlign: 'center', 
        marginBottom: 10
        
    }, 
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20, 
        width: '90%',
    }, 
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center', 
        borderRadius: 7
    }, 
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize:20
    }
})