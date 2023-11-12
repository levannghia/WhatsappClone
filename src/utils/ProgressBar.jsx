import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Colors } from '../theme/Colors'

const ProgressBar = ({setTimeUp}) => {
    const progressAnimation = useRef(new Animated.Value(0)).current
    const animationProgress = () => {
        Animated.timing(progressAnimation, {
            toValue: 100,
            duration: 10000,
            useNativeDriver: false
        }).start(({ finished }) => {
            if (finished) {
                setTimeUp();
                console.log("Animation Stopped");
            }
        })
    }

    useEffect(() => {
        animationProgress()
    }, [])
    return (
        <View style={styles.container}>
            <View style={{
                width: "100%",
                backgroundColor: '#708090',
                borderRadius: 5,
                height: 5,
                marginBottom: 10
            }}>
                <Animated.View style={[styles.progress, {
                    width: progressAnimation.interpolate({
                        inputRange: [0, 100],
                        outputRange: ['0%', '100%']
                    })
                }]} />
            </View>
        </View>
    )
}

export default ProgressBar

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    progress: {
        width: "100%",
        backgroundColor: Colors.white,
        borderRadius: 5,
        height: 5
    }
})