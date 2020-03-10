import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Detail = ({ route }) => {
    const { phone, email, picture } = route.params;
    console.log(email)
    return (
        <View style={styles.container}>
            <View style={{ width: '100%' }}>
                <Image
                    style={{
                        height: 300,
                        resizeMode: 'contain'
                    }}
                    source={{
                        uri: picture.large
                    }}
                />
            </View>
            <View style={{ marginTop: 15 }}>
                <Text style={styles.text}>{phone ? phone : '-'}</Text>
            </View>
            <View style={{ marginTop: 15 }}>
                <Text style={styles.text}>{email ? email : '-'}</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        padding: 10,
        margin: 20
    },
    userImage: {
        borderWidth: 1,
        borderColor: 'black'
    },
    text: {
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        margin: 10
    }
});

export default Detail;