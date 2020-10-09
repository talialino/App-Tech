import React from 'react';
import { Image, Text } from 'react-native';

import logo from '../../assets/fbicon.png';
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

export default function User() {
    return (
        <Container>
            <Image source={logo} />
            <Title>
                <Text>Faceboook</Text>
            </Title>

            <TextDesc>
                <Text>
                    We are working to build community through open source
                    technology. NB: members must have two-factor auth.
                </Text>
            </TextDesc>

            <Form>
                <FormTop>
                    <TitleBold>
                        <Text>124</Text>
                    </TitleBold>
                    <NameDetailsRepo>Repositorios</NameDetailsRepo>
                </FormTop>

                <FormTop>
                    <TitleBold>0</TitleBold>
                    <NameDetailsRepo>Seguidores</NameDetailsRepo>
                </FormTop>
                <FormTop>
                    <TitleBold>0</TitleBold>
                    <NameDetailsRepo>Seguindo</NameDetailsRepo>
                </FormTop>
            </Form>

            <FormBotton>
                <TitleBold>hhvm</TitleBold>

                <SubTitle>
                    A virtual machine for executing programs written in Hack.
                </SubTitle>
                <Form>
                    <SubTitle>
                        <Text>C++ </Text>
                    </SubTitle>
                    <SubTitle>
                        <Text> | </Text>
                    </SubTitle>
                    <SubTitle>
                        <Text>16.688 stars</Text>
                    </SubTitle>
                    <SubTitle>
                        <Text> | </Text>
                    </SubTitle>
                    <SubTitle>
                        <Text>2.910 forks</Text>
                    </SubTitle>
                </Form>
            </FormBotton>
        </Container>
    );
}
