export interface CardsDataDTO {
    title?: string;
    oldTitle?: string;
    body?: string;
    oldDescription?: string;
    id: string ;
}
export interface ReducerState {
    data:CardsDataDTO[],
    fetch_data:any[],
    isEdit: boolean,
    isOpen: boolean,
    isLoad: boolean,
    }
