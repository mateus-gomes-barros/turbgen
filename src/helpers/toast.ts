import Swal from 'sweetalert2'


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  background: "#24a105ff",
  color: "white",
  iconColor: '#ffffff',
  customClass: {
    popup: 'colored-toast',
  },
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
})

export async function AlertToast(){
  await Toast.fire({
    icon: 'success',
    title: 'Codigo Copiado',
  })
}
