import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const UserInfo = ({ userData }) => {
    const { name, email, phone, picture } = userData;
    return (
        <View style={styles.userInfoContainer}>
            <Image style={styles.imageContainer} source={{ uri: picture.large }} />
            <View style={styles.textInfoContainer}>
                <Text style={styles.text}>{name.title}.{name.first} {name.last}</Text>
                <Text style={styles.text}>{phone}</Text>
                <Text style={styles.text}>{email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userInfoContainer: {
        flex: 4,
        flexDirection: "row",
        marginBottom: 6,
    },
    imageContainer: {
        borderWidth: 1,
        borderRadius: 10,
        width: 150,
        height: 150,
        backgroundColor: "red"
    },
    textInfoContainer: {
        flex: 3,
        margin: 6,
    },
    text: {
        color: '#fff',
        margin: 5,
        fontWeight: '200'
    }
})

export default UserInfo;