import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
    const bookmark = useLoaderData();

    return (
        <div className="bookmark-container">
            <h3>{bookmark.title}</h3>
            <h4>{bookmark.url}</h4>

            <Form action={`/update/${bookmark._id}`} method="post" className="bookmark-form">
                <input type="text" name="title" placeholder="Item name" defaultValue={bookmark.title} />
                <input type="text" name="url" placeholder="Item URL" defaultValue={bookmark.url} />
                <input type="submit" value="Update Item" />
            </Form>
            
            <Form action={`/delete/${bookmark._id}`} method="post" className="bookmark-form">
            <input className="button" type="submit" value="Delete Item"/>
            </Form>
        </div>
    )
}

export default Show;