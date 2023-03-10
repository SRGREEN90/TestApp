import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    getTreeRowsParamsType,
    tableItemsApi
} from "../dal/api/api";
import {eID} from "../../App";
import {createRowInEntityTC} from "./create-row-reducer";



export const getTreeRowsTC = createAsyncThunk('itemsReducer/addItemsTC', async (eID: number,{dispatch, rejectWithValue})=> {
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

export const deleteRowTC = createAsyncThunk('itemsReducer/deleteRowTC', async (params: {id: number, rowId: number},{dispatch, rejectWithValue}) => {
    try {
        const response = await tableItemsApi.deleteRow(params.id, params.rowId)

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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTreeRowsTC.fulfilled, (state, action) => {
            return action.payload as any
        });
        builder.addCase(createRowInEntityTC.fulfilled, (state, action) => {
            state.push(action.payload as any)
            return state
        });
        builder.addCase(deleteRowTC.fulfilled, (state, action) => {
            delete state[action.payload as any]
        });
    }
});
export const itemsReducer = slice.reducer



