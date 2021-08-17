import { NavContainer, ContentContainer, NavBrand, NavLinksContainer } from './styles';

const Navbar = () => {
    return (
        <NavContainer>
            <ContentContainer>
                <div style={{ alignSelf: 'center' }}>
                    <NavBrand href="/">Facefake</NavBrand>
                </div>

                <NavLinksContainer>
                    <li>
                        <a href="/account">Account</a>
                    </li>
                </NavLinksContainer>
            </ContentContainer>

        </NavContainer>
    );
}

export default Navbar;