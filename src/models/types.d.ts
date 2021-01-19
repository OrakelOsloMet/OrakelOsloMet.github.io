interface IQueueEntity {
    id: number;
    name: string;
    subject: string;
    studyYear: string;
    digitalConsultation: boolean;
    confirmedDone: boolean;
    timeConfirmedDone: string | null;
}

interface ISubject {
    id: number;
    name: string;
    semester: string;
}