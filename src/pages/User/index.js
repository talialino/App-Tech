import React, { useContext } from 'react';
import { Text } from 'react-native';

import {
    Container,
    Avatar,
    Name,
    Bio,
    Barra,
    List,
    CardRepository,
    RepoDesc,
    RepoLang,
    RepoName,
    ForksCount,
    StarCount,
    Title,
    SubTitle,
    TextDesc,
    Form,
    FormTop,
    TitleBold,
    NameDetailsRepo,
} from './styles';

import gitUser from '../../contexts/gitUser';

export default function User() {
    const { user, repos } = useContext(gitUser);

    return (
        <Container>
            <Barra />
            <Avatar source={{ uri: `${user.avatar_url}` }} />

            <Title>
                <Name>{user.name}</Name>
            </Title>

            <TextDesc>
                <Bio>{user.bio}</Bio>
            </TextDesc>

            <Form>
                <FormTop>
                    <TitleBold>
                        <Text>{user.public_repos}</Text>
                    </TitleBold>
                    <NameDetailsRepo>Repositórios</NameDetailsRepo>
                </FormTop>

                <FormTop>
                    <TitleBold>{user.followers}</TitleBold>
                    <NameDetailsRepo>Seguidores</NameDetailsRepo>
                </FormTop>
                <FormTop>
                    <TitleBold>{user.following}</TitleBold>
                    <NameDetailsRepo>Seguindo</NameDetailsRepo>
                </FormTop>
            </Form>

            <List
                data={repos}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <>
                        <CardRepository>
                            <RepoName>{item.name}</RepoName>

                            <RepoDesc>{item.description}</RepoDesc>
                            <Form>
                                <SubTitle>
                                    <RepoLang>{item.language}</RepoLang>
                                </SubTitle>
                                <SubTitle>
                                    <Text> | </Text>
                                </SubTitle>
                                <SubTitle>
                                    <StarCount>
                                        {item.stargazers_count} stars
                                    </StarCount>
                                </SubTitle>
                                <SubTitle>
                                    <Text> | </Text>
                                </SubTitle>
                                <SubTitle>
                                    <ForksCount>
                                        {item.forks_count} forks
                                    </ForksCount>
                                </SubTitle>
                            </Form>
                        </CardRepository>
                    </>
                )}
            />
        </Container>
    );
}
