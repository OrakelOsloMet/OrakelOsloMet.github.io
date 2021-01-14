interface IQueueEntity {
    id: number;
    url: string;
    name: string;
    subject: string;
    studyYear: string;
    digitalConsultation: boolean;
    confirmedDone: boolean;
    timeConfirmedDone: string;
}

interface ISubject {
    name: string;
}