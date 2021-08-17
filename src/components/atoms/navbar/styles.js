import styled from 'styled-components';

export const NavContainer = styled.nav`
    position: fixed;
    width: 100%;
    top: 0;
`;

export const ContentContainer = styled.div`
    background-color: #4267B2;
    display: grid;
    grid-template-columns: auto 1fr;
    padding: 0 1rem;
`;

export const NavBrand = styled.a`
    color: white;
    font-size: 2rem;
    font-weight: 600;
`;

export const NavLinksContainer = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: flex-end;

    li {
        margin: 0 1rem;

        a {
            text-transform: uppercase;
            font-weight: 400;
            letter-spacing: 1px;
            color: #fff;
        }
    }
`;