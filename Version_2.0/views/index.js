window.addEventListener('load', (event) => {
  console.log('DOM fully loaded and parsed');
  document.querySelector('#start').addEventListener('click', e => init(e));
});

'use strict';

// Put variables in global scope to make them available to the browser console.
const constraints = window.constraints = {
  audio: false,
  video: true
};

function handleSuccess(stream) {
  const video = document.getElementById('emitter-video');
  window.stream = stream;
  video.srcObject = stream;
}

function handleError(error) {
  if (error.name === 'ConstraintNotSatisfiedError') {
    const v = constraints.video;
    errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`);
  } else if (error.name === 'PermissionDeniedError') {
    errorMsg('Permissions have not been granted to use your camera and ' +
      'microphone, you need to allow the page access to your devices in ' +
      'order for the demo to work.');
  }
  errorMsg(`getUserMedia error: ${error.name}`, error);
}

function errorMsg(msg, error) {
  const errorElement = document.querySelector('#errorMsg');
  errorElement.innerHTML += `<p>${msg}</p>`;
  if (typeof error !== 'undefined') {
    console.error(error);
  }
}

async function init(e) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
    e.target.disabled = true;
  } catch (e) {
    handleError(e);
  }
}