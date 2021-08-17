import styled from 'styled-components';

export const Form = styled.form.attrs(props => ({
    onSubmitCapture: (event) => event.preventDefault()
}))`
    margin: 2rem 0;
    display: grid;
    grid-template-rows: 1fr .5fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
    max-width: 600px;
`;