import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const POST_START = 'POST_START';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL';

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_START })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('res', res)
            return (
                dispatch({ type: FETCH_SUCCESS, payLoad: res.data })
            )
        })
        .catch(err => dispatch({ type: FETCH_FAIL, payLoad: err }))

}


export const postSmurfs = (newSmurf) => dispatch => {
    dispatch({ type: POST_START })
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log('res', res)
            return (
                dispatch({ type: POST_SUCCESS, payLoad: res.data })
            )
        })
        .catch(err => {
            console.log('err', err)
            return (
                dispatch({ type: POST_FAIL, payLoad: err })
            )
        })



}