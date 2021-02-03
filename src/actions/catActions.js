// write and export your action creator function here
const API = 'https://learn-co-curriculum.github.io/cat-api/cats.json'

export const fetchCats = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_CATS"})
        fetch(API)
        .then(r => r.json())
        .then(responseJSON => {
            console.log(responseJSON.images)
            dispatch({type: "ADD_CATS", cats: responseJSON.images})
        })
    }
}