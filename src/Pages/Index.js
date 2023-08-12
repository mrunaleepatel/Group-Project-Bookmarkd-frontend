import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props) {
    const bookmarks = useLoaderData();
    
    return (
        <div className="bookmarks-container">
            <Form action="/create" method="post" className="bookmark-form">
                <h2 className="bookmark-form">Add a new item to your wishlist:</h2>
                <input type="text" name="title" placeholder="Item name"/>
                <input type="text" name="url" placeholder="Item URL" />
                <input type="submit" value="Add Item"/>
            </Form>
            <ul>
            {bookmarks.map((bookmark, index) => {
                return(
                    <li key={bookmark._id} className="bookmark">
                        <Link to={`/${bookmark._id}`}>
                            {bookmark.title}
                        </Link>
                    </li>
                );
            })}
            </ul>
    </div>
    );
}

export default Index;