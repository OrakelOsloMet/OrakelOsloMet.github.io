import {AdminActionTypes, AuthActionTypes, QueueActionTypes} from "./actions/actionTypes";

interface IUser {
    token: string | null;
    userId: string | null;
    roles: Array<string>
}

type AuthState = {
    user: IUser | null;
    error: string | null;
    loading: boolean;
}

type QueueState = {
    queueData: Array<IQueueEntity>;
    subjectData: Array<ISubject>;
    error: string | null;
    loading: boolean;
}

type AdminState = {
    subjectData: Array<ISubject>;
}

type FetchAction = {
}

type QueueAction = {
    type: QueueActionTypes;
    queueData?: Array<IQueueEntity>;
    subjectData?: Array<ISubject>
    error?: string;
}

type AuthAction = {
    type: AuthActionTypes;
    user?: IUser;
    error?: string;
}

type AdminAction = {
    type: AdminActionTypes;
    subjectData?: Array<ISubject>
}


type QueueDispatch = (args: QueueAction | FetchAction) => QueueAction | FetchAction;
type AuthDispatch = (args: AuthAction) => AuthAction
type AdminDispatch = (args: AdminAction) => AdminAction | FetchAction