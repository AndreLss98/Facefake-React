import styled from 'styled-components';

export const Textarea = styled.textarea`
    border-color: #898F9C;
    outline: none;
    padding: .5rem 0 .5rem .5rem;

    &::placeholder {
        color: #898F9C;
    }

    &:focus {
        border-color: #4267B2;
        outline: 2px dashed #4267B2;
    }

    &:focus::placeholder {
        color: #4267B2;
    }
`;