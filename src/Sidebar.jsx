import { NavLink } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-heading">
                <h2 className="sidebar-header-top">Credit Risk</h2>
                <h2 className="sidebar-header-bottom">Dashboard</h2>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <NavLink to="/">
                            <img src="src/assets/dashboard.svg" alt="dashboard icon" />Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/loan-application-search">
                            <img src="src/assets/magnifyingGlass.svg" alt="loan applications search icon" />Search Loans
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/loan-application-search">
                            <img src="src/assets/magnifyingGlass.svg" alt="loan applications search icon" />Search Loans
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}