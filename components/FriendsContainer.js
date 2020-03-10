import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { FriendCard } from './index'

const FriendsContainer = ({ friendsData, navigation }) => {
    // console.log("friendsData:", friendsData)

    const renderItem = ({ item }) => (
        <FriendCard friendData={item} navigation={navigation} />
    )
    return (
        <View style={styles.container}>
            {friendsData &&
                <FlatList
                    data={friendsData}
                    keyExtractor={(item, index) => index.toString()}
                    maxToRenderPerBatch={10} // Determines how many list items will be rendered on each scroll
                    removeClippedSubviews={true} // Unmount components when outside of window
                    numColumns={5}
                    renderItem={renderItem}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
});

export default FriendsContainer;