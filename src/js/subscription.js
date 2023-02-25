import BSN from 'bootstrap.native';

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;
const modal = new BSN.Modal('#subscription-modal');

openModal();

refs.modal.addEventListener('click', () => {
  modal.hide();
  openModal();
});

refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('MAX or subscribe');
    return;
  }
  setTimeout(() => {
    console.log('Open modal');
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribed = true;
  modal.hide();
}

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Leave');
//     clearInterval(intervalId);
//     return;
//   }
//   console.log('Subscribe! -' + Date.now());
//   promptCounter += 1;
// }, PROMPT_DELAY);
