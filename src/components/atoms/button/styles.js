import styled from 'styled-components';

const Button = styled.button.attrs(props => ({ 'data-expand': props.expand }))`
    border: none;
    margin: .5rem 0;
    &:hover {
        cursor: pointer;
    }
    &[data-expand="full"] {
        width: 100%;
    }

    &[color="primary"] {
        background-color: #4267B2;
        color: white;
        padding: .5rem 1rem;
        &:hover {
            filter: drop-shadow(0px 0px 8px #4267B2);
        }
    }

    &[disabled] {
        background-color: #898F9C !important;
        filter: none !important;
    }
`;

export { Button };