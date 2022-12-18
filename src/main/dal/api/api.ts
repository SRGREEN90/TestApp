import axios, {AxiosResponse} from "axios";


export const instance = axios.create({
    baseURL: 'http://185.244.172.108:8081/',
    //   "rowName":"a18c7d13-51ff-46fa-80dd-9ae73ae9dc5c"
})


export const tableItemsApi = {

    getTreeRows: (eID: number) => {
        return instance.get<getTreeRowsParamsType[], AxiosResponse<ResponseType>>(`v1/outlay-rows/entity/${eID}/row/list`);
    },
    createRowInEntity: (eID: number, model: createRowInEntityModelType) => {       ///v1/outlay-rows/entity/{eID}/row/create
        return instance.post<createRowInEntityModelType, AxiosResponse<ResponseType>>(`v1/outlay-rows/entity/${eID}/row/create`, model);
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
    rowName: "string",
    salary: number,
    supportCosts: number,
    total: number
}
 export type createRowInEntityModelType = Omit<
     getTreeRowsParamsType,
     'child' | 'id' | 'total'
     > & {
    parentId: number | null,
}
