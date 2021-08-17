import styled from 'styled-components';

export const Input = styled.input`
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    padding-bottom: .5rem;

    &:focus {
        border-bottom: 1px solid #4267B2;
    }

    &[type="radio"] {
        margin: 0;
        margin-right: .5rem;
    }
`;