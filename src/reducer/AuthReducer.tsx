import { PayloadProps } from "../components/types/PayloadType";

export interface AuthState {
    payload: PayloadProps |null;
    isLoading: boolean;
}

type AuthAction =
    | { type: "SIGNUP"; payload: PayloadProps } 
    | { type: "LOGIN"; payload: PayloadProps  }
    

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    const { type, payload } = action;
    switch (type) {
        case "SIGNUP":
            return {
                ...state,
                payload,
                isLoading: false,
            };
        case "LOGIN":
            return {
                ...state,
                payload,
                isLoading: false,
            };
        
        default:
            return state;
    }
};

export default authReducer;
