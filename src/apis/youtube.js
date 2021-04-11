import axios from 'axios'

const KEY = 'AIzaSyDrONeG2i3nt7ofJRluonif5FqW8iC9Gdk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})