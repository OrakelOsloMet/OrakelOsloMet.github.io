import React from "react";
import {DeleteButton, SubmitButton} from "../../components/UI/Buttons/buttons";

const AdminPage = () => {
    return (
        <>
            <h1 className={"mt-5"}>Administrer Emner</h1>
            <form className={"form-row ml-5 mt-5"} style={{backgroundColor: "white", width: "50%"}}>
                <div className={"col-md-2 form-group ml-5"}>
                    <div className={"d-flex flex-column"}>
                        <label htmlFor={"subject"}>Emne</label>
                        <select className={"form-control"} id={"subject"}>
                            <option>Fag 1</option>
                            <option>Fag 2</option>
                            <option>Fag 3</option>
                        </select>
                    </div>
                </div>

                <div className={"col-md-2 form-group"}>
                    <div className={"d-flex flex-column"}>
                        <label htmlFor={"subjectName"}>Emnenavn</label>
                        <input className={"form-control"} type={"text"} placeholder={"Nytt Navn"}
                               id={"subjectName"}/>
                    </div>
                </div>

                <div className={"col-md-2 form-group"}>
                    <div className={"d-flex flex-column"}>
                        <label htmlFor={"semester"}>Semester</label>
                        <select className={"form-control"} id={"semester"}>
                            <option>Vår</option>
                            <option>Høst</option>
                        </select>
                    </div>
                </div>

                <div className={"col-md-2 form-group"}>
                    <div className={"d-flex flex-column"}>
                        <label htmlFor="semester">&nbsp;</label>
                        <SubmitButton>Lagre</SubmitButton>
                    </div>
                </div>

                <div className={"col-md-2 form-group"}>
                    <div className={"d-flex flex-column"}>
                        <label htmlFor="semester">&nbsp;</label>
                        <DeleteButton>Slett Emne</DeleteButton>
                    </div>
                </div>
            </form>

            <h1 className={"mt-5 mb-5"}>Kødata</h1>

            <form className={"form-row ml-5 mt-5"}>

                <div className={"col-md-2 form-group"}>
                    <div className={"d-flex flex-column"}>
                        <label htmlFor={"exportFrom"}>Fra</label>
                        <input id={"exportFrom"} type={"date"} className={"form-control"}></input>
                    </div>
                </div>

                <div className={"col-md-2 form-group"}>
                    <div className={"d-flex flex-column"}>
                        <label htmlFor={"exportTo"}>Til</label>
                        <input id={"exportTo"} type={"date"} className={"form-control"}></input>
                    </div>
                </div>

                <div className={"col-md-1 form-group"}>
                    <div className={"d-flex flex-column"}>
                        <label htmlFor="exportTo">&nbsp;</label>
                        <SubmitButton>Eksporter</SubmitButton>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AdminPage;