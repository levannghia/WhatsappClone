import { StyleSheet, Text, View, Modal, Image } from 'react-native'
import React from 'react'
import Status1 from '../assets/status1.jpeg'
import User1 from '../assets/user1.jpeg'
import VectorIcon from './VectorIcon'
import { Colors } from '../theme/Colors'
import ProgressBar from './ProgressBar'

const FullModal = (props) => {
    const { showStatusModal, setShowStatusModal, item, setTimeUp } = props;
    console.log('showStatusModal: ', showStatusModal);
    const updateModalStatus = () => {
        setShowStatusModal(prev => ({ ...prev, [item.id]: false }));
    };

    return (
        <Modal
            animationType='fade'
            onRequestClose={updateModalStatus}
            visible={showStatusModal}
        >
            <View style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
                <ProgressBar setTimeUp={setTimeUp} />
                <View style={{ flexDirection: "row", alignItems: 'center', paddingHorizontal: 12, marginBottom: 20, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: "row", alignItems: 'center', }}>
                        <VectorIcon
                            name="arrow-back"
                            type="Ionicons"
                            size={24}
                            color={Colors.white}
                            onPress={() =>
                                setShowStatusModal(prev => ({ ...prev, [item.id]: false }))
                            }
                        />
                        <Image source={User1} style={{ width: 40, height: 40, borderRadius: 20, marginHorizontal: 10 }} />
                        <Text style={{
                            fontSize: 17,
                            color: Colors.white,
                        }}
                        >Junu</Text>
                    </View>
                    <VectorIcon
                        type="Entypo"
                        name="dots-three-vertical"
                        color={Colors.white}
                        size={18}
                    />
                </View>
                <View>
                    <Image source={Status1} style={{ width: "100%", height: "80%" }} />
                    <Text style={{
                        fontSize: 17,
                        color: Colors.white,
                        textAlign: 'center',
                        marginTop: 10
                    }}
                    >My Latest Art</Text>
                    <View style={styles.replySection}>
                        <VectorIcon
                            type="Entypo"
                            name="chevron-small-up"
                            color={Colors.white}
                            size={24}
                            onPress={() =>
                                setShowStatusModal(prev => ({ ...prev, [item.id]: false }))
                            }
                        />
                        <Text style={styles.reply}>Reply</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default FullModal

const styles = StyleSheet.create({
    reply: {
        fontSize: 15,
        color: Colors.white,
        textAlign: 'center',
        marginBottom: 10,
    },
    replySection: {
        alignItems: 'center',
    },
})