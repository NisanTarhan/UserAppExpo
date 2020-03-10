import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator,
} from 'react-native';
import { UserCard } from './index';


const Main = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)

    useEffect(() => {
        setLoading(true);
        fetch(`https://randomuser.me/api/?results=10`)
            .then(response => response.json())
            .then(({ results }) => {
                setUsers(results);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, [])


    const loadMoreData = () => {
        setPage(page + 1);
        setLoading(true);
        getRandomUser();
    }

    const renderFooter = () => (
        loading ? <ActivityIndicator style={{ alignSelf: 'center', marginTop: 10 }} size="large" /> : null);


    const getRandomUser = () => {
        fetch(`https://randomuser.me/api/?page=${page}&results=10`)
            .then(response => {
                // if (response.ok)
                return response.json()
            })
            .then(({ results }) => {
                setLoading(false);
                setUsers([...users, ...results])

            })
            .catch(error => console.error(error));
    }


    const renderItem = ({ item }) => (
        <UserCard userData={item} navigation={navigation} />
    )

    const renderFlatListHeader = () => (
        <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic' }}>PERSON CARDS</Text>
    )

    // if (loading) {
    //     return <ActivityIndicator size="large" color="#0000ff" />
    // }
    // console.log(users)
    return (
        <SafeAreaView style={styles.container}>
            {users &&
                <FlatList
                    style={{ marginTop: 40 }}
                    data={users}
                    keyExtractor={(item, index) => index.toString()}
                    // initialNumToRender={10} // Reduce initial render amount
                    // maxToRenderPerBatch={3} // Determines how many list items will be rendered on each scroll
                    updateCellsBatchingPeriod={100} // Increase time between renders
                    removeClippedSubviews={false} // Unmount components when outside of window
                    renderItem={renderItem}
                    onEndReached={loadMoreData}
                    ListFooterComponent={renderFooter}
                    ListHeaderComponent={renderFlatListHeader}
                />
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
});

export default Main;
