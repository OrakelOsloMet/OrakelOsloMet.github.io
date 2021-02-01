import {SubjectActionTypes, AuthActionTypes, QueueActionTypes} from "./actions/actionTypes";

interface IUser {
    token: string | null;
    userId: string | null;
    roles: Array<string>
}

interface APIDependentState {
    error: string | null;
    loading: boolean;
}

type AuthState = {
    user: IUser | null;
    error: string | null;
    loading: boolean;
}

interface QueueState extends APIDependentState {
    queueData: Array<IQueueEntity>;
}

interface SubjectState extends APIDependentState{
    currentSubjectData: Array<ISubject>;
    allSubjectData: Array<ISubject>;
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

type SubjectAction = {
    type: SubjectActionTypes;
    allSubjectData?: Array<ISubject>;
    currentSubjectData?: Array<ISubject>;
    error?: string;
}


type QueueDispatch = (args: QueueAction | FetchAction) => QueueAction | FetchAction;
type AuthDispatch = (args: AuthAction) => AuthAction
type SubjectDispatch = (args: SubjectAction | FetchAction) => SubjectAction | FetchAction