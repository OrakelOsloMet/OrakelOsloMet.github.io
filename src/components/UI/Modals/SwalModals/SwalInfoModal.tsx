import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import React from "react";

type SwalInfoProps = {
    title: string,
    contentText: string,
    url: string | null,
    hyperlinkText: string | null
}

const SwalInfoModal = (props: SwalInfoProps) => {
    const mySwal = withReactContent(Swal)
    const hyperlinkDiv: HTMLDivElement = document.createElement("div");

    if (props.url && props.hyperlinkText) {
        hyperlinkDiv.innerHTML = `<strong><a href="${props.url}" target="_blank">${props.hyperlinkText}</a></strong>`;
    }

    return (
        mySwal.fire({
            title: props.title,
            html: props.contentText,
            footer: props.url && props.hyperlinkText ? hyperlinkDiv : null,
            icon: "info",
            confirmButtonText: "Lukk"
        }));
};

export default SwalInfoModal