import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, Image, Text } from 'react-native';
import api from '../../services/api';
import logo1 from '../../assets/git.png';
import logo2 from '../../assets/AH.png';
import logo3 from '../../assets/girl.png';

import {
    Container,
    FormTop,
    Form,
    Input,
    SubmitButton,
    List,
    User,
    Avatar,
    Name,
    Bio,
    Barra,
    Status,
    NumStatus,
    TextStatus,
    CardRepository,
    RepoName,
    RepoDesc,
    RepoLang,
    StarCount,
    ForksCount,
} from './styles';

export default class Main extends Component {
    static navigationOptions = {
        title: 'Usuários',
    };

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
        }).isRequired,
    };

    state = {
        newUser: '',
        users: [],
        loading: false,
    };

    handleAddUser = async () => {
        const { users, newUser } = this.state;

        const response = await api.get(`/users/${newUser}`);
        const repositore = await api.get(`/users/${newUser}/repos`);

        const data = {
            login: response.data.login,
            name: response.data.name,
            bio: response.data.bio,
            avatar: response.data.avatar_url,
            repos: response.data.public_repos,
            followers: response.data.followers,
            following: response.data.following,
            reposname: repositore.data.name,
            reposdesc: repositore.data.description,
            reposlang: repositore.data.language,
            reposstar: repositore.data.stargazers_count,
            reposforks: repositore.data.forks,
        };

        this.setState({
            users: [data],
            newUser: '',
        });

        Keyboard.dismiss();
    };

    handleNavigate = (user) => {
        const { navigation } = this.props;

        navigation.navigate('User', { user });
    };

    render() {
        const { newUser, users } = this.state;
        return (
            <Container>
                <FormTop>
                    <Image source={logo1} />
                    <Image source={logo2} />
                </FormTop>

                <Image source={logo3} />

                <Form>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Usuario"
                        value={newUser}
                        onChangeText={(text) =>
                            this.setState({ newUser: text })
                        }
                        returnKeyType="send"
                        onSubmitEditing={this.handleAddUser}
                    />
                    <SubmitButton onPress={this.handleAddUser}>
                        <Text>Busca</Text>
                    </SubmitButton>
                </Form>

                <List
                    data={users}
                    keyExtractor={(user) => user.login}
                    renderItem={({ item }) => (
                        <>
                            <User>
                                <Avatar source={{ uri: item.avatar }} />
                                <Name>{item.name}</Name>
                                <Bio>{item.bio}</Bio>
                            </User>

                            <Barra>
                                <Status>
                                    <NumStatus>{item.repos}</NumStatus>
                                    <TextStatus>Repositórios</TextStatus>
                                </Status>
                                <Status>
                                    <NumStatus>{item.followers}</NumStatus>
                                    <TextStatus>Seguidores</TextStatus>
                                </Status>
                                <Status>
                                    <NumStatus>{item.following}</NumStatus>
                                    <TextStatus>Seguindo</TextStatus>
                                </Status>
                            </Barra>
                            <CardRepository>
                                <RepoName>{item.reposname}</RepoName>
                                <RepoDesc>{item.reposdesc}</RepoDesc>
                                <Barra>
                                    <RepoLang>{item.reposlang}</RepoLang>
                                    <StarCount>{item.reposstar}</StarCount>
                                    <ForksCount>{item.reposforks}</ForksCount>
                                </Barra>
                                <SubmitButton
                                    onPress={() => this.handleNavigate(item)}
                                >
                                    <Text>Ver completo</Text>
                                </SubmitButton>
                            </CardRepository>
                        </>
                    )}
                />
            </Container>
        );
    }
}

