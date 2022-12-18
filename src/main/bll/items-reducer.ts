import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getTreeRowsParamsType, tableItemsApi} from "../dal/api/api";

//export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


//export const createEntityTC = createAsyncThunk('itemsReducer/addItemsTC', async (_,{dispatch, rejectWithValue}) => {
//     dispatch(setAppStatus({status: 'loading'}))
//     try {
//         const response = await tableItemsApi.createRowInEntity(eID)
//         console.log(response.data)
//         // if (response.status === 200) {
//         //     dispatch(setAppStatus({status: 'succeeded'}))
//         //     return response.
//         // } else {
//         //     return rejectWithValue(null)
//         // }
//     } catch (error) {
//         return rejectWithValue(null)
//     }
// })

export const getTreeRowsTC = createAsyncThunk('itemsReducer/addItemsTC', async (eID: number,{
    dispatch,
    rejectWithValue
}) => {
    try {
        const response = await tableItemsApi.getTreeRows(eID)
        if (response.status === 200) {
            return response.data
        } else {
            return rejectWithValue(null)
        }
    } catch (error) {
        return rejectWithValue(null)
    }
})

const slice = createSlice({
    name: 'itemsReducer',
    initialState: [] as getTreeRowsParamsType[] ,
    reducers: {
        // setAppStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
        //     state.status = action.payload.status
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(getTreeRowsTC.fulfilled, (state, action) => {
            state = action.payload
        });
    }
});
export const itemsReducer = slice.reducer
// export const {setAppStatus} = slice.actions


