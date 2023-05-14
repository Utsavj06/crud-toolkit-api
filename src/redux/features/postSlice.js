import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("post/getPost", async({id}) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
        return res.json()
    })
})

export const deletePost = createAsyncThunk("post/deletePost", async({id}) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    }).then((res)=>{
        return res.json()
    })
})

export const createPost = createAsyncThunk("post/creatPost", async({values}) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/0`, {
        method: 'POST',
        headers: {
         Accept: 'application/json',
        'Content-type': 'application/json'
        },
        body: JSON.stringify({
            tilte: values.title,
            body: values.body
        }),
    }).then((res)=>{
        return res.json()
    })
})



const postSlice = createSlice({
    name:'post',
    initialState: {
        post : [], loading: false, error: null
    },
    extraReducers: {
        [getPost.pending]: (state, action) => {
            state.loading = true
        },
        [getPost.fulfilled]: (state, action)=> {
            state.loading = false;
            state.post = action.payload;
        },
        [getPost.rejected]: (state, action) => {
            state.loading = false;
            state.post = action.payload
        },
        [deletePost.pending]: (state, action) => {
            state.loading = true
        },
        [deletePost.fulfilled]: (state, action)=> {
            state.loading = false;
            state.post = action.payload;
        },
        [deletePost.rejected]: (state, action) => {
            state.loading = false;
            state.post = action.payload
        },
        [createPost.pending]: (state, action) => {
            state.loading = true
        },
        [createPost.fulfilled]: (state, action)=> {
            state.loading = false;
            state.post = action.payload;
        },
        [createPost.rejected]: (state, action) => {
            state.loading = false;
            state.post = action.payload
        }
    }
})

export default postSlice.reducer;