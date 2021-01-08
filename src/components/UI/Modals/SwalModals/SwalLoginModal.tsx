import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

type SwalLoginProps = {
    onLoginSubmit: Function,
    clearLoginError: Function,
    errorMessage?: string
}

const SwalLoginModal = (props: SwalLoginProps) => {
    const {onLoginSubmit, clearLoginError, errorMessage} = props;
    const mySwal = withReactContent(Swal)

    return mySwal.fire({
        title: "Orakel Innlogging",
        html: `<input type="text" id="login" class="swal2-input" placeholder="Brukernavn">
                        <input type="password" id="password" class="swal2-input" placeholder="Passord">`,
        confirmButtonText: "Logg Inn",
        showLoaderOnConfirm: true,
        showCancelButton: true,
        cancelButtonColor: "#d33",
        cancelButtonText: "Avbryt",
        allowOutsideClick: () => !mySwal.isLoading(),
        didOpen: () => {
            if (errorMessage) {
                mySwal.showValidationMessage("Ugyldig brukernavn eller passord!")
            }
        },
        preConfirm: () => {
            const usernameInput = mySwal.getPopup()!.querySelector("#login")! as HTMLInputElement
            const passwordInput = mySwal.getPopup()!.querySelector("#password")! as HTMLInputElement

            const username = usernameInput.value.trim()
            const password = passwordInput.value.trim()

            if (!username || !password) {
                mySwal.showValidationMessage("Oppgi brukernavn og passord!")
            } else {
                onLoginSubmit(username, password)
                return {username: username, password: password}
            }
        }
    }).then((result) => {
        if (result.isDismissed) {
            clearLoginError()
        }
    })
};

export default SwalLoginModal