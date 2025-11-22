import styled from "styled-components";

export const Card = (props) => {
    const {children} = props;
    return (
        <SCard>
            {children}
        </SCard>
    )
};

const SCard = styled.div`
    background-color: #eee;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 16px;
`;