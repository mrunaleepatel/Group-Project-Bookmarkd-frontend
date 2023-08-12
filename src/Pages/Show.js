import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
    const bookmark = useLoaderData();

    return (
        <div className="bookmark-container">
            <h3>{bookmark.title}</h3>
            <h4>{bookmark.url}</h4>

            <Form action={`/update/${bookmark._id}`} method="post" className="bookmark-form">
                <input type="text" name="title" placeholder="book's title" defaultValue={bookmark.title} />
                <input type="text" name="url" placeholder="book's url" defaultValue={bookmark.url} />
                <input type="submit" value="Update Bookmark" />
            </Form>
            
            <Form action={`/delete/${bookmark._id}`} method="post" className="bookmark-form">
            <input className="button" type="submit" value="Delete bookmark"/>
            </Form>
        </div>
    )
}

export default Show;