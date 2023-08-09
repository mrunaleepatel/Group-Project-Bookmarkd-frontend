import { Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const bookmarks = useLoaderData()

    return bookmarks.map(bookmark =>
        <div key={bookmark._id} className="bookmark">
            <Link to={`/${bookmark._id}`}>
                <h1>{bookmark.title}</h1>
            </Link>
            <a><h2>{bookmark.url}</h2></a>
        </div>
    )
}

export default Index;