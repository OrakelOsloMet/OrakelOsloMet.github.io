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
    type: string;
    queueData?: IQueueEntity[];
    subjectData?: string[]
    error?: string;
}

type FetchAction = {
}


type QueueDispatch = (args: QueueAction | FetchAction) => QueueAction | FetchAction;