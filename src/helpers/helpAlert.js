import Swal from "sweetalert2";

/**
 * Muestra un mensaje de éxito utilizando SweetAlert2.
 *
 * @param {string} msg - El mensaje que se mostrará. Si está vacío, se usará un mensaje genérico por defecto.
 * @param {boolean} [small=false] - Indica si se mostrará el mensaje como un toast pequeño (ubicado en la esquina superior derecha).
 */
const success = (msg, small) => {
  let genericMessage = "Successful operation!";
  Swal.fire({
    title: msg === "" || msg == undefined ? genericMessage : msg,
    icon: "success",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    toast: small || false,
    position: small ? "top-end" : "",
  });
};

/**
 * Muestra un mensaje de advertencia utilizando SweetAlert2.
 *
 * @param {string} msg - El mensaje que se mostrará. Si está vacío, se usará un mensaje genérico por defecto.
 * @param {boolean} [small=false] - Indica si se mostrará el mensaje como un toast pequeño (ubicado en la esquina superior derecha).
 */
const fail = (msg, small) => {
  let genericMessage = "This operation could not be executed!";
  Swal.fire({
    title: msg === "" || msg == undefined ? genericMessage : msg,
    icon: "warning",
    showConfirmButton: true,
    confirmButtonColor: "#F89C2A",
    toast: small || false,
    position: small ? "top-end" : "center",
  });
};

/**
 * Muestra un cuadro de diálogo de confirmación con SweetAlert2.
 *
 * @param {string} msg - El mensaje que se mostrará en el cuadro de diálogo. Si está vacío, se usará un mensaje genérico por defecto.
 * @param {Function} actionConfirm - La función que se ejecutará si el usuario confirma la acción.
 * @param {string} [confirmText="Ok"] - El texto del botón de confirmación. Si no se especifica, se usará "Ok".
 * @param {string} [cancelText="Cancel"] - El texto del botón de cancelar. Si no se especifica, se usará "Cancel".
 */
const question = (msg, actionConfirm, confirmText, cancelText) => {
  let genericMessage = "Are you sure, you want confirm this operation?";
  Swal.fire({
    title: msg === "" || msg == undefined ? genericMessage : msg,
    icon: "question",
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: confirmText || "Ok",
    cancelButtonText: cancelText || "Cancel",
    confirmButtonColor: "#F89C2A",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.isConfirmed && actionConfirm) {
      actionConfirm();
    } else {
      // alert("You must pass a function to execute.")
    }
  });
};

const warning = (msg) => {
  Swal.fire({
    title: msg,
    icon: "warning",
    confirmButtonText: "Accept",
    confirmButtonColor: "#F89C2A",
  });
};

const helpAlert = {
  success,
  fail,
  question,
  warning,
};

export default helpAlert;
