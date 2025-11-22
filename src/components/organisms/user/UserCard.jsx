import styled from "styled-components";
import {Card} from "../../atoms/card/Card.jsx";
import {UserIconWithName} from "../../molcules/user/UserIconWithName";

export const UserCard = (props) => {
    const { user } = props;
    console.log(user);
    return (
        <Card>
            <UserIconWithName image={user.image} name={user.name} ></UserIconWithName>
            <SDL>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.phone}</dd>
                <dt>会社名</dt>
                <dd>{user.company}</dd>
                <dt>WEB</dt>
                <dd>{user.website}</dd>
            </SDL>
        </Card>
    );
};

const SDL = styled.dl`
    text-align: left;
    margin-bottom: 0px;
    dt {
        float: left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    }
`;