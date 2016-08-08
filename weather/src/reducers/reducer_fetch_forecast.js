export default function(state = {}, action) {
    switch(action.type) {
        case 'FETCH_FORECAST':
            console.log('FETCH_FORECAST REDUCER');
            return state;
    }

    return state;
}
