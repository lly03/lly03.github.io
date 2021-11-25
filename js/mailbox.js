const mailBoxOpen = document.getElementById('mail_box_open');
const mailBoxClose = document.getElementById('mail_box_close');

mailBoxClose.addEventListener('mouseover', () => {
    mailBoxOpen.classList.remove('hide');
    mailBoxClose.classList.add('hide');
})

mailBoxOpen.addEventListener('mouseleave', () => {
    mailBoxClose.classList.remove('hide');
    mailBoxOpen.classList.add('hide');
})