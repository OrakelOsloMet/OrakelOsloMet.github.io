import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

type Props = {
    title: string,
    iconType: "info" | "error" | "warning"
    contentText: string,
    url: string | null,
    hyperlinkText: string | null
}

const SwalMessageModal = (props: Props) => {
    const {title, contentText, url, hyperlinkText, iconType} = props;
    const mySwal = withReactContent(Swal)
    const hyperlinkDiv: HTMLDivElement = document.createElement("div");

    if (url && hyperlinkText) {
        hyperlinkDiv.innerHTML = `<strong><a href="${url}" target="_blank">${hyperlinkText}</a></strong>`;
    }

    return mySwal.fire({
            title: title,
            html: contentText,
            footer: url && hyperlinkText ? hyperlinkDiv : null,
            icon: iconType,
            confirmButtonText: "Lukk"
    });
};

export default SwalMessageModal;