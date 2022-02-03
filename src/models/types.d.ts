import {Semester} from "../constants/constants";

interface IQueueEntity {
    id: number;
    name: string;
    subject: string;
    digitalConsultation: boolean;
    placement: IPlacement | null;
    comment: string | null;
    studyYear: string;
}

interface ISubject {
    id: number;
    name: string;
    semester: Semester;
}

interface IPlacement {
    id: number;
    name: string;
    number: number;
}

