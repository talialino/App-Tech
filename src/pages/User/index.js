import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import api from '../../services/api';

import {
    Container,
    Title,
    SubTitle,
    TextDesc,
    Form,
    FormTop,
    TitleBold,
    NameDetailsRepo,
    FormBotton,
} from './styles';

export default class User extends Component {
    static navigationOptions = ({ navigation }) => ({
        // title: navigation.getParam('user').name,
    });

    state = {
        repos: [],
        nerepo: '',
    };

    async componentDidMount() {
        const { navigation } = this.props;
        const user = navigation.getParam('user');

        const response = await api.get(`/users/${user.login}/repos`);

        this.setState({ repos: response.data });
    }

    render() {
        return (
            <Container>
                <Title>
                    <Text>Faceboook</Text>
                </Title>

                <TextDesc>
                    <Text>
                        O facebook parararm ddlhvovn cjdnskd cndj djdmajvskdh{' '}
                    </Text>
                </TextDesc>

                <Form>
                    <FormTop>
                        <TitleBold>
                            <Text>250</Text>
                        </TitleBold>
                        <NameDetailsRepo>Seguidores</NameDetailsRepo>
                    </FormTop>

                    <FormTop>
                        <TitleBold>1550</TitleBold>
                        <NameDetailsRepo>Seguindo</NameDetailsRepo>
                    </FormTop>
                    <FormTop>
                        <TitleBold>102</TitleBold>
                        <NameDetailsRepo>Repositórios</NameDetailsRepo>
                    </FormTop>
                </Form>

                <FormBotton>
                    <TitleBold>Repositório 1</TitleBold>

                    <SubTitle>
                        Detalhes do repositório escrito aqui de um tamanho mais
                        compactado
                    </SubTitle>
                    <Form>
                        <SubTitle>
                            <Text>aqui </Text>
                        </SubTitle>
                        <SubTitle>
                            <Text> | </Text>
                        </SubTitle>
                        <SubTitle>
                            <Text>aqui </Text>
                        </SubTitle>
                        <SubTitle>
                            <Text> | </Text>
                        </SubTitle>
                        <SubTitle>
                            <Text>aqui</Text>
                        </SubTitle>
                    </Form>
                </FormBotton>
            </Container>
        );
    }
}
