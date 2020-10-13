import swal from "sweetalert";

export const swalInfoModal = (title, text, hyperlink = null) => {

    return (
        swal({
                title: title,
                text: text,
                content: hyperlink,
                icon: "info",
                button: {
                    text: "Ok",
                    className: "btn btn-primary"
                },
            }
        )
    );
};