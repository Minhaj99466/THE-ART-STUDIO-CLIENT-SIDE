import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    artistInfo : {},
};

const artistSlice = createSlice({
    name:"artist",
    initialState,
    reducers:{
        setartistdetails : (state,action) => {
            state.artistInfo = action.payload.artistInfo
        },
        Logoutdetails : (state) => {
            state.artistInfo = {}
        },
    }
})

export const {

    setartistdetails,
    Logoutdetails

} = artistSlice.actions;

export default artistSlice.reducer;