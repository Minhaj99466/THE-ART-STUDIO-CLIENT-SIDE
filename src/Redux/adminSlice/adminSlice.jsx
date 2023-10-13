import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    adminInfo : {},
};

const adminSlice = createSlice({
    name:"admin",
    initialState,
    reducers:{
        setadmindetails : (state,action) => {
            state.adminInfo = action.payload.adminInfo
        },
        Logoutdetails : (state) => {
            state.adminInfo = {}
        },



    }
})

export const {

    setadmindetails,
    Logoutdetails

} = adminSlice.actions;

export default adminSlice.reducer;