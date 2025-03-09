import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    thestate : true
}


export const userSlice = createSlice({
name :'user',
initialState,
reducers:{
login :(state)=>{
   state.thestate = true;
}
}

}
)

export const {login} = userSlice.actions;

export default userSlice.reducer;
