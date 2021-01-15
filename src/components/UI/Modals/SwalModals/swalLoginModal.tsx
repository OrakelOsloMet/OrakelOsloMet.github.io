import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

type Props = {
    onLoginSubmit: Function,
    clearLoginError: Function,
}

const SwalLoginModal = (props: Props) => {
    const {onLoginSubmit, clearLoginError} = props;
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
        preConfirm: async() => {
            const usernameInput = mySwal.getPopup()!.querySelector("#login")! as HTMLInputElement
            const passwordInput = mySwal.getPopup()!.querySelector("#password")! as HTMLInputElement

            const username = usernameInput.value.trim()
            const password = passwordInput.value.trim()

            if (!username || !password) {
                mySwal.showValidationMessage("Oppgi brukernavn og passord!");
                return false;
            }

            const successfulLogin = await onLoginSubmit(username, password);
            if (!successfulLogin) {
                mySwal.showValidationMessage("Ugyldig brukernavn eller passord!");
                return false;
            }

            return true;
        }
    }).then((result) => {
        if (result.isDismissed) {
            clearLoginError()
        }
    })
};

export default SwalLoginModal