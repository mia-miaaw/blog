function openPost(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.present();
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.dismiss();
  }
}
