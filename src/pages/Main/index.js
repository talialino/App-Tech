import React, { useState, useContext } from 'react';
import { Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo1 from '../../assets/git.png';
import logo2 from '../../assets/AdviceHub.png';
import logo3 from '../../assets/amenor.png';
import gitUser from '../../contexts/gitUser';

import {
    Container,
    TitleTop,
    FormTop,
    Form,
    Input,
    SubmitButton,
} from './styles';

export default function Main() {
    const { addUser, addRepos } = useContext(gitUser);
    const [data, setData] = useState([]);

    const navigation = useNavigation();

    function handleNavigate() {
        addUser(data);
        addRepos(data);
        navigation.navigate('User');
    }

    return (
        <Container>
            <FormTop>
                <Image source={logo1} />
                <TitleTop>GitSearch</TitleTop>
            </FormTop>
            <Image source={logo3} />

            <Form>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Usuario"
                    onChangeText={(texto) => setData(texto)}
                    returnKeyType="send"
                    onSubmitEditing={handleNavigate}
                />
                <SubmitButton onPress={handleNavigate}>
                    <Text>Busca</Text>
                </SubmitButton>
            </Form>
        </Container>
    );
}
