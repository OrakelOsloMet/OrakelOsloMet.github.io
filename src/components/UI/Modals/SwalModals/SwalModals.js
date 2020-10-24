import swal from "sweetalert";

export const SwalInfoModal = (title, contentText, url = null, hyperlinkText = null) => {
    const hyperlinkDiv = document.createElement("div");

    if (url && hyperlinkText) {
        hyperlinkDiv.innerHTML = `<strong><a href="${url}" target="_blank">${hyperlinkText}</a></strong>`;
    }

    return (
        swal({
                title: title,
                text: contentText,
                content: url && hyperlinkText ? hyperlinkDiv: null,
                icon: "info",
                button: {
                    text: "Ok",
                    className: "btn btn-primary"
                },
            }
        )
    );
};