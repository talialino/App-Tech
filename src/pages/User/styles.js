import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    background: #fff;
`;

export const Form = styled.View`
    margin-top: 10px;
    flex-direction: row;
    align-self: center;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

export const SubTitle = styled.Text`
    font-size: 12px;
`;

export const TextDesc = styled.Text`
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
`;

export const TitleBold = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;

export const NameDetailsRepo = styled.Text`
    font-size: 14px;
`;

export const FormTop = styled.View`
    margin-bottom: 30px;
    padding: 0 16px;
`;
export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
    width: 195px;
    height: 195px;
    border-radius: 32px;
    background: #eee;
`;

export const Name = styled.Text`
    font-size: 24px;
    color: #333;
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
`;

export const Bio = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 14px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
    text-align: center;
`;
export const Barra = styled.View`
    border-top-width: 30px;
`;

export const CardRepository = styled.View`
    margin-bottom: 10px;
    padding: 0 20px;
    border-radius: 4px;
    background: #eee;
`;
export const RepoName = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;

export const RepoDesc = styled.Text`
    font-size: 12px;
`;

export const RepoLang = styled.Text`
    font-size: 12px;
`;

export const StarCount = styled.Text`
    font-size: 12px;
`;

export const ForksCount = styled.Text`
    font-size: 12px;
`;
