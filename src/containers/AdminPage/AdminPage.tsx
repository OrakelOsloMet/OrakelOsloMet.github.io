import React from "react";
import {DeleteButton, SubmitButton} from "../../components/UI/Buttons/buttons";

const AdminPage = () => {
    return (
        <>
            <div className={"d-flex flex-row"} style={{width: "90%", margin: "auto"}}>
                <div className={"card shadow bg-white rounded mb-5 mt-5"} style={{width: "33%"}}>
                    <div className={"card-header"}><h2>Emner</h2></div>

                    <form className={"mt-2 mb-2"} style={{width: "80%", margin: "auto"}}>
                        <div className={"form-group"}>
                            <label htmlFor={"subject"}>Emne</label>
                            <select className={"form-control"} id={"subject"}>
                                <option>Fag 1</option>
                                <option>Fag 2</option>
                                <option>Fag 3</option>
                            </select>
                        </div>

                        <div className={"form-group"}>
                            <label htmlFor={"subjectName"}>Emnenavn</label>
                            <input className={"form-control"} type={"text"} placeholder={"Nytt Navn"}
                                   id={"subjectName"}/>
                        </div>

                        <div className={"form-group"}>
                            <label htmlFor={"semester"}>Semester</label>
                            <select className={"form-control"} id={"semester"}>
                                <option>Vår</option>
                                <option>Høst</option>
                            </select>
                        </div>

                        <div className={"form-group"}>
                            <SubmitButton>Lagre</SubmitButton>
                            <DeleteButton>Slett Emne</DeleteButton>
                        </div>
                    </form>
                </div>


                <div className={"card shadow bg-white rounded ml-5 mb-5 mt-5"} style={{width: "33%"}}>
                    <div className={"card-header"}><h2>Eksporter Kødata</h2></div>
                    <form style={{width: "80%", margin: "auto"}}>

                        <div className={"form-group"}>
                            <label htmlFor={"exportFrom"}>Fra</label>
                            <input id={"exportFrom"} type={"date"} className={"form-control"}></input>
                        </div>

                        <div className={"form-group"}>
                            <label htmlFor={"exportTo"}>Til</label>
                            <input id={"exportTo"} type={"date"} className={"form-control"}></input>
                        </div>

                        <div className={"form-group"}>
                            <SubmitButton>Eksporter</SubmitButton>
                        </div>
                    </form>
                </div>
                
            </div>
        </>
    )
}

export default AdminPage;