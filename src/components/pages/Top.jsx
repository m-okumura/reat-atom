import styled from "styled-components";
import {SecondaryButton} from "../atoms/button/SecondaryButton";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../providers/UserProvider"; // この行を追加


export const Top = () => {
    const navigate = useNavigate();
    const { setUserInfo } = useContext(UserContext);


    const onClickAdmin = () => {
        setUserInfo({isAdmin: true});
        navigate("/users");
    };
    const onClickGeneral = () => {
        setUserInfo({isAdmin: false});
        navigate("/users");
    };
    return (
        <SContainer>
            <h2>TOPページです</h2>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザ</SecondaryButton>
            <br />
            <br />
            <SecondaryButton onClick={onClickGeneral}>一般のユーザ</SecondaryButton>
        </SContainer>
    );
};

const SContainer = styled.div`
    text-align: center;
`;
