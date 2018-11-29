import { Action } from "@ngrx/store";

export const FETCH_CATEGORY = 'fetch_category';
export const SET_CATEGORY = 'set_category';

export class FetchCategory implements Action{
    readonly type = FETCH_CATEGORY;
}

export class SetCategory implements Action{
    readonly type = SET_CATEGORY;
    constructor(public payload: any){}
}

export type productListPageActions = 
    FetchCategory |
    SetCategory;
