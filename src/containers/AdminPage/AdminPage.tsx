import React from "react";
import styles from "./adminPage.module.css";
import Card from "../../components/UI/Cards/card";
import {DeleteButton, SubmitButton} from "../../components/UI/Buttons/buttons";

type Props = {
    isAuthenticated: boolean
}

const AdminPage = (props: Props) => {

    let content =

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
        </form>;

    return (
        <>
            {!props.isAuthenticated ? <h1 style={{color: "red"}}>UNAUTHORIZED</h1> :
                <div className={"d-flex flex-row " + styles.adminPage}>
                    <Card widthPercent={33} shadow={true} header={"Emner"} content={content}/>
                    <Card widthPercent={33} shadow={true} header={"Emner 2"} content={content}/>
                    <Card widthPercent={33} shadow={true} header={"Emner 2"} content={content}/>
                </div>
            }
        </>
    )
}

export default AdminPage;