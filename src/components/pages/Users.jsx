import styled, {keyframes} from "styled-components";
import {SearchInput} from "../molcules/SearchInput";
import {UserCard} from "../organisms/user/UserCard";
import {useLocation} from "react-router-dom";

const users = [...Array(10).keys()].map((
    (val) => {
    return {
        id: val,
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\"",
        name: "奥村",
        email: "test@co.jp",
        phone: "000-112-2222",
        company: "test",
        website: "test.com"
    }
}))

export const Users = () => {
    const {state} = useLocation();

    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user}/>
                ))}
            </SUserArea>
        </SContainer>
    );
};

const SContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
`;

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`;