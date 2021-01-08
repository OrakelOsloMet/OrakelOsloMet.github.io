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
    const {title, contentText, url, hyperlinkText} = props;
    const mySwal = withReactContent(Swal)
    const hyperlinkDiv: HTMLDivElement = document.createElement("div");

    if (url && hyperlinkText) {
        hyperlinkDiv.innerHTML = `<strong><a href="${url}" target="_blank">${hyperlinkText}</a></strong>`;
    }

    return mySwal.fire({
            title: title,
            html: contentText,
            footer: url && hyperlinkText ? hyperlinkDiv : null,
            icon: "info",
            confirmButtonText: "Lukk"
    });
};

export default SwalInfoModal