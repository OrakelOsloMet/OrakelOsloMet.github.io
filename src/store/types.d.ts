import {AuthActionTypes, QueueActionTypes} from "./actions/actionTypes";

interface IUser {
    token: string | null;
    userId: string | null;
    roles: string[]
}

type AuthState = {
    user: IUser;
    error: string | null;
    loading: boolean;
}

type QueueState = {
    queueData: IQueueEntity[];
    subjectData: ISubject[];
    error: string | null;
    loading: boolean;
}

type QueueAction = {
    type: QueueActionTypes;
    queueData?: IQueueEntity[];
    subjectData?: string[]
    error?: string;
}

type FetchAction = {
}

type AuthAction = {
    type: AuthActionTypes;
    user?: IUser;
    error?: string;
}


type QueueDispatch = (args: QueueAction | FetchAction) => QueueAction | FetchAction;
type AuthDispatch = (args: AuthAction) => AuthAction