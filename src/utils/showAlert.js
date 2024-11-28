import Swal from "sweetalert2";

// 알림을 보여주는 공통 함수
const showAlert = ({ title, icon, text, confirmButtonText, onConfirm }) => {
  Swal.fire({
    title,
    icon,
    text,
    confirmButtonText,
    willOpen: () => {
      const iconElem = document.querySelector(".swal2-icon");
      const titleElem = document.querySelector(".swal2-title");
      if (iconElem && titleElem) {
        iconElem.style.margin = "auto";
        titleElem.style.padding = "1.25em 0 1.25em";
      }
    },
  }).then((result) => {
    if (result.isConfirmed && onConfirm) {
      onConfirm();
    }
  });
};
export default showAlert;
