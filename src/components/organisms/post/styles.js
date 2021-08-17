import styled from 'styled-components';

export const Post = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    margin: 2rem 0;
    max-width: 600px;
`;

export const ImgPost = styled.div`
    background: url("${props => props.src}") center no-repeat;
    background-size: cover;
    width: 100%;
    height: 300px;
    max-width: 1000px;
    margin: 2rem 0;
`;