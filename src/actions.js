import { redirect } from "react-router-dom";
import { baseUrl } from "./base_url";

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newBookmark = {
        title: formData.get('title'),
        url: formData.get('url'),
    }
    await fetch(`${baseUrl}/bookmarks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBookmark)
    })
    return redirect('/')
}

export const updateAction = async ({request, params}) => {
    const id = params.id
    const formData = await request.formData()
    const newBookmark = {
        title: formData.get('title'),
        url: formData.get('url'),
    }
    await fetch(`${baseUrl}/bookmarks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBookmark)
    })
    return redirect('/')
}

export const deleteAction = async ({params}) => {
    const id = params.id
    await fetch(`${baseUrl}/bookmarks/${id}`, {
        method: 'DELETE'
    })
    return redirect('/')
}