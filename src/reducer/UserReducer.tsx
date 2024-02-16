import { PayloadProps } from "../components/types/PayloadType";

export interface UsersStateType {
    payload: PayloadProps[] |null;
    isLoading: boolean;
}

type UserActionType =
    | { type: "FETCH"; payload: PayloadProps[] } 
    | { type: "FETCHALL"; payload: PayloadProps[]  }
    

const userReducer = (state: UsersStateType, action: UserActionType): UsersStateType => {
    const { type, payload } = action;
    switch (type) {
        case "FETCHALL":
            return {
                ...state,
                payload,
                isLoading: false,
            };
        case "FETCH":
            return {
                ...state,
                payload,
                isLoading: false,
            };
        
        default:
            return state;
    }
};

export default userReducer;
