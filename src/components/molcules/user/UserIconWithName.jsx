import React, {useContext} from "react";
import styled from "styled-components";
import {UserContext} from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
    const { image, name } = props;
    const { userInfo } = useContext(UserContext);
    const isAdmin = userInfo ? userInfo.isAdmin : false;
    return (
        <SContainer>
            <SImg
                height={160}
                width={160}
                src={image}
                alt={name}
            />
            <SName>{name}</SName>
            {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    );
};

const SContainer = styled.div`
    text-align: center;
`;

const SImg = styled.img`
    border-radius: 50%;
    display: block;
    margin: 0 auto;
`;

const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #a14141;
`;

const SEdit = styled.span`
    text-decoration: underline;
    color: #a14141;
    cursor: pointer;
`;