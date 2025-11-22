import {Link} from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
    return (
        <SHeader>
            <SLink to="/">Home</SLink>
            <SLink to="/users">Users</SLink>
        </SHeader>
    );
};

const SHeader = styled.header`
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
`;

const SLink = styled(Link)`
    margin: 0 10px;
`;