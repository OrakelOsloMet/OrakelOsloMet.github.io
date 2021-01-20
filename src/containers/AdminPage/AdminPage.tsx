import React from "react";
import {ConfirmButton, DeleteButton} from "../../components/UI/Buttons/buttons";

const AdminPage = () => {
    return (
        <>
            <h1 className={""}>Administrer Eksisterende Emner</h1>
            <form className={"form-inline mt-5 mb-5"} style={{width: "50%", margin: "auto"}}>
                <select className={"form-control ml-2 mr-2 mt-2"} id={"fag"}>
                    <option>Fag 1</option>
                    <option>Fag 2</option>
                    <option>Fag 3</option>
                </select>
                <input className={"form-control ml-2 mr-2 mt-2"} type={"text"} placeholder={"Nytt Navn"}/>
                <select className={"form-control ml-2 mr-2 mt-2"}>
                    <option>Vår</option>
                    <option>Høst</option>
                </select>
                <ConfirmButton>Lagre</ConfirmButton>
                <DeleteButton>Slett Emne</DeleteButton>
            </form>

            <h1>Nytt Emne</h1>
            <form className={"form-inline mt-5 mb-5"} style={{width: "50%", margin: "auto"}}>
                <input className={"form-control ml-2 mr-2 mt-2"} placeholder={"Emnenavn"}/>
                <select className={"form-control ml-2 mr-2 mt-2"}>
                    <option>Vår</option>
                    <option>Høst</option>
                </select>
                <ConfirmButton>Lagre Emne</ConfirmButton>
            </form>

            <h1>Kødata</h1>
            <form className={"form-inline mt-5 mb-5"} style={{width: "50%", margin: "auto"}}>
                <input id={"exportFrom"} type={"date"} className={"form-control ml-2 mr-2 mt-2"}></input>
                <input id={"exportTo"} type={"date"} className={"form-control ml-2 mr-2 mt-2"}></input>
                <ConfirmButton>Eksporter Kødata</ConfirmButton>
            </form>
        </>
    )
}

export default AdminPage;