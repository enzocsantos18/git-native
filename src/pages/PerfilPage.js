import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import ApiService from '../services/ApiService';
import Style from '../styles/Style';

// import { Container } from './styles';

const PerfilPage = ({ route, navigation }) => {

    const [userInfo, setUserInfo] = useState({})
    const [repos, setRepos] = useState([])

    useEffect(() => {
        ApiService.get(`users/${route.params.username}`).then(res => {
            console.log(res.data)
            setUserInfo(res.data)
        }).catch(() => {
            navigation.goBack();
        })

        ApiService.get(`users/${route.params.username}/repos`).then(res => {
            setRepos(res.data)
        })

    }, [])

    return (


        <View>
            {userInfo != {} ? (
                <View>
                    <Image source={{ uri: userInfo.avatar_url }} />
                    <Text>@{userInfo.login}</Text>
                    <Text>Company: {userInfo.company}</Text>
                    <Text>Seguidores: {userInfo.followers}</Text>
                    <Text>Seguindo: {userInfo.following}</Text>

                </View>
            ) : <Text>Carregando...</Text>}
            <ScrollView style={{ height: 200 }}>
                {
                    repos.map(repo => (
                        <View style={Style.container} key={repo.id}>
                            <Text>{repo.name}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View >



    );
}

export default PerfilPage;