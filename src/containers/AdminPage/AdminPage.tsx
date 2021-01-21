import React from "react";
import styles from "./adminPage.module.css";
import Card from "../../components/UI/Cards/card";
import SubjectForm from "../../components/UI/Forms/SubjectForm/subjectForm";

type Props = {
    isAuthenticated: boolean
}

const AdminPage = (props: Props) => {

    let content = <SubjectForm/>

    return (
        <>
            {!props.isAuthenticated ? <h1 style={{color: "red"}}>UNAUTHORIZED</h1> :
                <div className={"d-flex flex-row " + styles.adminPage}>
                    <Card widthPercent={25} shadow={true} header={"Emner"}>{content}</Card>
                </div>
            }
        </>
    )
}

export default AdminPage;