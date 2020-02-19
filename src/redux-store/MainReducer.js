import {mediaApi} from "./api";

const ADD_CURRENT_MEDIA = 'ADD_CURRENT_MEDIA';
const DELETE_CURRENT_MEDIA = 'DELETE_CURRENT_MEDIA';
const SET_MEDIA = 'SET_MEDIA';
const SET_MEDIA_HISTORY = 'SET_MEDIA_HISTORY';
const IS_FETCHING = 'IS_FETCHING';


let initialState = {
    currentGif: '',
    history: [],
    isFetching: false,
    data: []

};

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_CURRENT_MEDIA:{
            debugger
            return {
                ...state, currentGif: action.currentGif
            };
        }
        case DELETE_CURRENT_MEDIA: {
            debugger
            return {
                ...state,
                history: state.history.filter(u => u.history != action.deleteImg)
            }
        }
        case SET_MEDIA_HISTORY: {
            debugger
            return {
                ...state,
                history: [...state.history, {history: action.history}]
            }
        }
        case SET_MEDIA: {
            debugger
            return {...state,
                data: [...state.data, action.img]
                // ...state,
                // history: state.history.map(u => {
                //     if(u.img === action.img){
                //         return {...u, img:action.img}
                //     }
                // })

                //     state.history.map(u => {
                //     if (u.img != action.img) {
                //         return [...state.history, {img: action.img}]
                //     }
                //     return u
                // })

                    // (action.img
                    // ? [...state.history, {img: action.img}]
                    // : [...state.history]
                // history: [...state.history, {img: action.img}]
            };
        }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }

};


// action
export const addCurrentMedia = (currentGif) => ({type: ADD_CURRENT_MEDIA, currentGif});
export const setMedia = (img) => ({type: SET_MEDIA, img});
export const setMediaHistory = (history) => ({type: SET_MEDIA_HISTORY, history});
export const DeleteCurrentMedia = (deleteImg) => ({type: DELETE_CURRENT_MEDIA, deleteImg});
export const toggleIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching});


// thusk
export const addCurrentMediaThunk = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        mediaApi.getMedia().then(res => {
            if (res.status === 200) {
                debugger
                // dispatch(setMedia(res.data.data));
                const media = res.data.data.image_url;
                dispatch(addCurrentMedia(media));
                dispatch(toggleIsFetching(false))
            } else {
                alert('Произошла ошибка');
                console.log('')
            }
        })
    }
};


// export const SetGifsThunk = () => {
//     return (dispatch) => {
//
//         dispatch(toggleIsFetching(true));
//
//         mediaApi.getMedia().then(res => {
//             if (res.status === 200) {
//                 const media = res.data.data.images.downsized_large.url;
//                 dispatch(addCurrentMedia(media));
//                 dispatch(toggleIsFetching(false));
//             } else {
//                 alert('Произошла ошибка');
//                 console.log('')
//             }
//         })
//     }
// };

export default MainReducer;
