import { Link, Outlet } from "react-router-dom"

const Dashboard: React.FC = () => {

    return (<div>
        <h1>Dashboard!!!</h1>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#e3f2fd;" }}>
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarNavAltMarkupDash">
                    <div className="navbar-nav">
                        <Link className="mx-2" to="/deals">Today's Deals</Link>
                        <Link className="mx-2" to="/buy-again">Buy Again</Link>
                    </div>
                </div>
            </div>
        </nav>

        <div>
            <Outlet></Outlet>
        </div>
    </div>)
}

export default Dashboard