import React from "react";

const AdminPage = () => {
    return (
        <>
            <h1>Administrer Eksisterende Emner</h1>
            <form>
                <label htmlFor={"fag"}>Velg Emne</label>
                <select id={"fag"}>
                    <option>Fag 1</option>
                    <option>Fag 2</option>
                    <option>Fag 3</option>
                </select>
                <input type={"text"} placeholder={"Nytt Navn"}/>
                <select>
                    <option>Vår</option>
                    <option>Høst</option>
                </select>
                <button>Lagre</button>
                <button>Slett Emne</button>
            </form>

            <h1>Nytt Emne</h1>
            <form>
                <input placeholder={"Emnenavn"}/>
                <select>
                    <option>Vår</option>
                    <option>Høst</option>
                </select>
                <button>Lagre Emne</button>
            </form>

            <h1>Kødata</h1>
            <label htmlFor={"fag"}>Fra</label>
            <input id={"exportFrom"} type={"date"}></input>
            <label htmlFor={"exportTo"}>Til</label>
            <input id={"exportTo"} type={"date"}></input>
            <button>Eksporter Kødata</button>
        </>
    )
}

export default AdminPage;