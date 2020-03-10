import React, { useEffect, useState, memo } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { UserInfo, FriendsContainer } from './index';

const UserCard = ({ userData, navigation }) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    const [friendsNumber] = useState(Math.floor(Math.random() * 10) + 1)

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        fetch(`https://randomuser.me/api/?results=${friendsNumber}`)
            .then(response => response.json())
            .then(({ results }) => {
                setFriends(results);
                setLoading(false);

            })
            .catch(error => console.error(error));
    }

    return (
        <View style={styles.container}>
            <View style={styles.userCardContainer}>
                <UserInfo style={styles.userInfo} userData={userData} />
                <Text style={styles.text}>Friends: ({friends.length})</Text>
                <FriendsContainer navigation={navigation} style={styles.friendsContainer} friendsData={friends} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userCardContainer: {
        backgroundColor: '#515585',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        borderWidth: 1,
        borderRadius: 10,
        shadowRadius: 1,
        shadowOffset: {
            width: 3,
            height: 3
        },
        margin: 5,
        padding: 6,
    },
    userInfo: {
        flex: 3,
        margin: 10
    },
    text: {
        flex: 1,
        color: '#fff',
        fontSize: 20,
        margin: 6
    },
    friendsContainer: {
        flex: 2,
        backgroundColor: 'gray',
    }
})

export default UserCard;