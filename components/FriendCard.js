import React, { useCallback } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FriendCard = ({ friendData, navigation }) => {
    const { name: { first: first }, picture } = friendData;

    const handlePressFriend = useCallback(() => {
        const { phone, email, picture } = friendData;
        navigation.navigate('Detail', { phone, email, picture });
    });

    return (
        <TouchableOpacity onPress={handlePressFriend} style={styles.container}>
            <Image style={styles.image} source={{ uri: picture.medium }}></Image>
            <Text style={styles.text}>{first}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 55,
        height: 55,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        margin: 5,
        backgroundColor: 'white'
    },
    image: {
        flex: 3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    text: {
        flex: 1,
        fontSize: 10,
        alignSelf: 'center',
    }
});

export default FriendCard;