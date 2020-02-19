import {createSelector} from "reselect";

export const GetGifs =(state) => {
    return state.main.currentGif
};

export const GetData =(state) => {
    return state.main.data
};

export const SetGifsSelector = (state) => {
     return  state.main.history
};

export const SetGifs = createSelector(SetGifsSelector, (history)  => {
    return history.filter(u => true)
});

export const IsFetching = state => {
    return state.main.isFetching
};