import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Facefake</a>
                </div>

                <ul>
                    <li>
                        <a href="/account">Account</a>
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;