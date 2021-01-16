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
export const TitleTop = styled.Text`
    font-size: 17px;
    font-weight: bold;
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
