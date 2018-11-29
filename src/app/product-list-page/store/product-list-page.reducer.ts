import * as productListPageAction from './product-list-page.action';

export interface ProductDetailsState {
    catagories: any[],
    products: any[]
}

const initialProductDetailsState: ProductDetailsState  = {
    catagories: null,
    products: null
} 

export function ProductDetailsReducer(state: ProductDetailsState = initialProductDetailsState, action: productListPageAction.productListPageActions ){
    switch(action.type){
        case productListPageAction.FETCH_CATEGORY: return state.catagories;
        case productListPageAction.SET_CATEGORY:  
            return {
                ...state,
                catagories: action.payload
            };
        default: return state;
    }
}