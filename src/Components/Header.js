import { Link } from "react-router-dom"

function Header(props){
    return <nav className="nav">
        <Link to="/">
            <div>Bookmark App</div>
        </Link>
        <h1 className="app-name">What is our app name?</h1>

    </nav>

}

export default Header