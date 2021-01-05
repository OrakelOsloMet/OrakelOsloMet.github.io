export class QueueEntity {

    public id: number;
    public url: string;
    public name: string;
    public subject: string;
    public studyYear: string;
    public digitalConsultation: boolean;
    public confirmedDone: boolean;
    public timeConfirmedDone: string;

    constructor(id: number, url: string, name: string, subject: string, studyYear: string, digitalConsultation: boolean, confirmedDone: boolean, timeConfirmedDone: string) {
        this.id = id;
        this.url = url;
        this.name = name;
        this.subject = subject;
        this.studyYear = studyYear;
        this.digitalConsultation = digitalConsultation;
        this.confirmedDone = confirmedDone;
        this.timeConfirmedDone = timeConfirmedDone;
    }

}