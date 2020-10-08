import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'android',
    behavior: 'padding',
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    background: #fff;
`;
export const FormTop = styled.View`
    flex-direction: row;
    align-self: stretch;
    margin-bottom: 50px;
    align-items: center;
`;
export const Form = styled.View`
    align-self: stretch;
    margin-top: 50px;
`;

export const Input = styled.TextInput`
    margin-bottom: 10px;
    background: #eee;
    height: 40px;
    padding: 0 5px;
`;

export const SubmitButton = styled(RectButton)`
    height: 40px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
    background: #bababa;
    border-radius: 8px;
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
    flex-direction: row;
    align-self: center;
`;
export const Status = styled.View`
    align-items: center;
    margin: 0 10px 30px;
`;

export const NumStatus = styled.Text`
    font-size: 14px;
    font-weight: bold;
    padding: 0 25px;
`;

export const TextStatus = styled.Text`
    font-size: 14px;
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
