import axios, {AxiosResponse} from "axios";

export const instance = axios.create({
    baseURL: 'http://185.244.172.108:8081/',
    //   "rowName":"a18c7d13-51ff-46fa-80dd-9ae73ae9dc5c"
})

export const tableItemsApi = {

    getTreeRows: (eID: number) => {
        return instance.get<getTreeRowsParamsType[], AxiosResponse<ResponseType>>(`v1/outlay-rows/entity/${eID}/row/list`);
    },
    createRowInEntity: (eID: number, model: createRowInEntityRequestType) => {
        return instance.post<CreateRowInEntityResponseType, AxiosResponse<ResponseType>>(`v1/outlay-rows/entity/${eID}/row/create`, model);
    },
    deleteRow: (eID: number, rowID: number) => {
        return instance.delete<deleteRowType, AxiosResponse<ResponseType>>(`/v1/outlay-rows/entity/${eID}/row/${rowID}/delete`);
    },
}

export type getTreeRowsParamsType = {
    child: number[],
    equipmentCosts: number,
    estimatedProfit: number,
    id: number,
    machineOperatorSalary: number,
    mainCosts: number,
    materials: number,
    mimExploitation: number,
    overheads: number,
    rowName: string,
    salary: number,
    supportCosts: number,
    total: number
}

export type createRowInEntityRequestType = {
    equipmentCosts: number,
    estimatedProfit: number,
    machineOperatorSalary: number,
    mainCosts: number,
    materials: number,
    mimExploitation: number,
    overheads: number,
    parentId: number | null,
    rowName: string,
    salary: number,
    supportCosts: number,
}



export type CreateRowInEntityResponseType = {
    changed: ChangedRowsType[],
    current: CurrentRowsType
}

export type ChangedRowsType = {
    equipmentCosts: number,
    estimatedProfit: number,
    id: number,
    machineOperatorSalary: number,
    mainCosts: number,
    materials: number,
    mimExploitation: number,
    overheads: number,
    rowName: string,
    salary: number,
    supportCosts: number,
    total: number
}
export type CurrentRowsType = {
    equipmentCosts: number,
    estimatedProfit: number,
    id: number,
    machineOperatorSalary: number,
    mainCosts: number,
    materials: number,
    mimExploitation: number,
    overheads: number,
    rowName: string,
    salary: number,
    supportCosts: number,
    total: number
}



export type deleteRowType = {
    "changed": [
        {
            equipmentCosts: 0,
            estimatedProfit: 0,
            id: 0,
            machineOperatorSalary: 0,
            mainCosts: 0,
            materials: 0,
            mimExploitation: 0,
            overheads: 0,
            rowName: string,
            "salary": 0,
            supportCosts: 0,
            total: 0
        }
    ],
    "current": {
        equipmentCosts: 0,
        estimatedProfit: 0,
        id: 0,
        machineOperatorSalary: 0,
        mainCosts: 0,
        materials: 0,
        mimExploitation: 0,
        overheads: 0,
        rowName: string,
        "salary": 0,
        supportCosts: 0,
        total: 0
    }
}