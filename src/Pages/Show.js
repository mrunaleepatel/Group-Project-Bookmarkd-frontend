import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
    const bookmark = useLoaderData();

    return (
        <div className="bookmark">
            <h1>{bookmark.title}</h1>
            <h2>{bookmark.url}</h2>

            <Form action={`/update/${bookmark._id}`} method="post">
                <input type="text" name="title" placeholder="book's title" defaultValue={bookmark.title} />
                <input type="text" name="url" placeholder="book's url" defaultValue={bookmark.url} />
                <input type="submit" value={`update ${bookmark.title}`} />
            </Form>

            <h2>Delete bookmark</h2>
            <Form action={`/delete/${bookmark._id}`} method="post">
                <input className="button" type="submit" value="Delete bookmark"/>
            </Form>
        </div>
    )
}

export default Show;