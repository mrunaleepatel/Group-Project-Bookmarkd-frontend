import {baseUrl} from './base_url';

export const bookmarkLoader = async () => {
    const response = await fetch(`${baseUrl}/bookmarks`)
    const bookmark = await response.json()
   
    return bookmark
}

export const bookmarksLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(`${baseUrl}/bookmarks/${id}`)
    const bookmarks = await response.json()

    return bookmarks
}