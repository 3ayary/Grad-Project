import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    thestate: false
}


export const userSlice = createSlice({
name :'user',
initialState,
reducers:{
login : (state) => {
   state.thestate = true;
},
logout : (state) => {
   state.thestate = false;
}

}
}
)

export const {login,logout} = userSlice.actions;

export default userSlice.reducer;
