import axios, {AxiosResponse} from "axios";


export const instance = axios.create({
    baseURL: 'http://185.244.172.108:8081/',
})


export const tableItemsApi = {

    getTreeRows: (eID: number) => {
        return instance.get<getTreeRowsParamsType[]>(`/v1/outlay-rows/entity/${eID}/row/list`);
    },

    // createEntity: () => {
    //     return instance.post('v1/outlay-rows/entity/create');
    // },

    // createItems: (newCard: addCardType) => {
    //     return instance.post('/cards/card', {card: {...newCard}})
    // },
    // deleteItems: (id: string) => {
    //     return instance.delete('/cards/card', {params: {id: id}})
    // },
    // updateItems: (UpdatedCard: Partial<CardType>) => {
    //     return instance.put('/cards/card', {card: {...UpdatedCard}})
    // },
}

//   "rowName":"a18c7d13-51ff-46fa-80dd-9ae73ae9dc5c"

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

