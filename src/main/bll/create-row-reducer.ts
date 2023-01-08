import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    ChangedRowsType,
    createRowInEntityRequestType, CreateRowInEntityResponseType,
    tableItemsApi
} from "../dal/api/api";
import {getTreeRowsTC} from "./items-reducer";
import {onOffline} from "@reduxjs/toolkit/dist/query/core/setupListeners";


export const createRowInEntityTC = createAsyncThunk('createRowReducer/createRowInEntityTC', async (param: { id: number, model: createRowInEntityRequestType }, {
    dispatch,
    rejectWithValue
}) => {
    try {
        const response = await tableItemsApi.createRowInEntity(param.id, param.model)

        if (response.status === 200) {
            getTreeRowsTC(param.id)
            return response.data

        } else {
            return rejectWithValue(null)
        }
    } catch (error) {
        return rejectWithValue(null)
    }
})


const slice = createSlice({
    name: 'createRowReducer',
    initialState: {
        changed: [{
            equipmentCosts: 0,
            estimatedProfit: 0,
            id: 0,
            machineOperatorSalary: 0,
            mainCosts: 0,
            materials: 0,
            mimExploitation: 0,
            overheads: 0,
            rowName: 'CHANGED',
            salary: 0,
            supportCosts: 0,
            total: 0
        }],
        current: {
            equipmentCosts: 0,
            estimatedProfit: 0,
            id: 0,
            machineOperatorSalary: 0,
            mainCosts: 0,
            materials: 0,
            mimExploitation: 0,
            overheads: 0,
            rowName: 'CURRENT',
            salary: 0,
            supportCosts: 0,
            total: 0
        }

    } as CreateRowInEntityResponseType,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createRowInEntityTC.fulfilled, (state, action) => {
            state.changed.push(action.payload as any)
            return state
        });
    }
});
export const createRowReducer = slice.reducer
// export const {setAppStatus} = slice.actions


