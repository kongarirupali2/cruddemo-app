const AppReducer = (state, action) => {
    switch(action.type) {

        case "ADD_USER":
            return {
                users: [action.payload, ...state.users],
             };

             
        case "REMOVE_USER":
            return {
                users: state.users.filter((user) => {
                    return user.id !== action.payload;
                }),
            };

        

        case "EDIT_USER":
            const uu = action.payload;
            const updatedUsers = state.users.map((user) => {
                 if(uu.id===user.id)
                    return uu;
                else
                    return user;
            })
            return {users:updatedUsers}



        default:
            return state;
    }
};

export default AppReducer;