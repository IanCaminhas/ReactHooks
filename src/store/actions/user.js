//todas as ações de usuários

export function login(dispatch, name){
    dispatch({type: 'login', payload: name})
}