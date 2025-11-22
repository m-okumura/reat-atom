import styled from "styled-components";

export const Input = (props) => {
    const { placeholder = "" } = props;
    return <SInput placeholder={placeholder} type="text"></SInput>;
};

const SInput = styled.input`
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
`;