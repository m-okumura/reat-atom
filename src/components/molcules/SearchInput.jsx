import styled from "styled-components";

import {PrimaryButton} from "../atoms/button/PrimaryButton";
import {Input} from "../atoms/input/input.tsx";

export const SearchInput = (props) => {
    return (
        <div>
            <SContainer>
                <Input placeholder=""></Input>
                <SButtonWrapper>
                    <PrimaryButton>Search</PrimaryButton>
                </SButtonWrapper>
            </SContainer>
            <br />
        </div>
    );
};

const SContainer = styled.div`
    display: flex;
    align-items: center;
`;
const SButtonWrapper = styled.div`
    padding-left: 8px;
`;