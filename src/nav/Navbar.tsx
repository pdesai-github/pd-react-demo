import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="mx-2" to="/">Dashboard</Link>
                            <Link className="mx-2" to="/products">Products</Link>
                            <Link className="mx-2" to="/cart">Cart</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>)
}

export default Navbar;