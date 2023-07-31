import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';
import skipButton from "react-native-onboarding-swiper/src/buttons/SkipButton";

const {width, height} = Dimensions.get('window');

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleDone = ()=>{
        navigation.navigate('Home');
        setItem('onboarded', '1');
    }

    const doneButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Fait</Text>
            </TouchableOpacity>
        )

    }
    const nextButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Suivant</Text>
            </TouchableOpacity>
        )

    }
    const skipButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Ignorer</Text>
            </TouchableOpacity>
        )

    }
    return (
        <View style={styles.container}>
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                // bottomBarHighlight={false}
                DoneButtonComponent={doneButton}
                NextButtonComponent={nextButton}
                SkipButtonComponent={skipButton}
                containerStyles={{paddingHorizontal: 15}}
                pages={[
                    {
                        backgroundColor: '#d7a7f3',
                        image: (
                            <View style={styles.lottie}>
                                <Lottie source={require('../assets/test.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'La sécurité',
                        subtitle: "Détendez-vous en toute tranquillité lors de votre voyage en toute sécurité !",
                    },
                    {
                        backgroundColor: '#fef3c7',
                        image: (
                            <View style={styles.lottie}>
                                <Lottie source={require('../assets/animation_lkqqyg4t.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Tous solidaire',
                        subtitle: 'Ensemble, faisons la différence ! Rejoignez-nous dans notre mission et impactez positivement des vies.',
                    },
                    {
                        backgroundColor: '#8bfaa1',
                        image: (
                            <View style={styles.lottie}>
                                <Lottie source={require('../assets/dangerDeclare.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Soyez un Héros de la Route',
                        subtitle: 'Signalez les événements dangereux dans les aires de repos pour protéger nos voyageurs.',
                    },
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie:{
        width: width*0.9,
        height: width*.9
    },
    doneButton: {
        padding: 20,
        // backgroundColor: 'white',
        // borderTopLeftRadius: '100%',
        // borderBottomLeftRadius: '100%'
    }
})
