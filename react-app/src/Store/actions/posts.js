import * as actionTypes from "./actionTypes";
import axios from "axios";

export const uploadPost = (file) => {
    const fd = new FormData()
    fd.append('image', file, file.name)
    axios.post('url here bitch', fd)
    .then(res => {
        console.log(res);
    })
};