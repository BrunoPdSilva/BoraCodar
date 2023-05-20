window.addEventListener('DOMContentLoaded', () => {
  // $ PLAYER 01
  const audio1 = document.querySelector('.audio1');
  const play1 = document.querySelector('.playBtn1');
  const prevBtn1 = document.querySelector('.prevBtn1');
  const nextBtn1 = document.querySelector('.nextBtn1');
  const progressBar1 = document.querySelector('.progress1');
  const timeElapsed1 = document.querySelector('.totalTime1');
  const timeLeft1 = document.querySelector('.timeLeft1');

  play1.addEventListener('click', () => {
    if (audio1.paused) {
      audio1.play();
      play1.innerHTML = '<img src="./assets/play.svg" alt="Play">';
    } else {
      audio1.pause();
      play1.innerHTML = '<img src="./assets/pause.svg" alt="Pause">';
    }
  });

  audio1.addEventListener('play', () => {
    play1.innerHTML = '<img src="./assets/pause.svg" alt="Pause">';
  });

  audio1.addEventListener('pause', () => {
    play1.innerHTML = '<img src="./assets/play.svg" alt="Play">';
  });

  prevBtn1.addEventListener('click', () => {
    audio1.currentTime -= 5;
  });

  nextBtn1.addEventListener('click', () => {
    audio1.currentTime += 5;
  });

  audio1.addEventListener('timeupdate', () => {
    const duration = audio1.duration;
    const currentTime = audio1.currentTime;
    const progressPercent = (currentTime / duration) * 100;

    progressBar1.style.setProperty('--w', progressPercent + '%');

    const elapsedMinutes = Math.floor(currentTime / 60);
    const elapsedSeconds = Math.floor(currentTime % 60);
    timeElapsed1.innerHTML =
      elapsedMinutes + ':' + (elapsedSeconds < 10 ? '0' : '') + elapsedSeconds;

    const remainingTime = duration - currentTime;
    const remainingMinutes = Math.floor(remainingTime / 60);
    const remainingSeconds = Math.floor(remainingTime % 60);
    timeLeft1.innerHTML =
      (remainingMinutes < 10 ? '0' : '') +
      remainingMinutes +
      ':' +
      (remainingSeconds < 10 ? '0' : '') +
      remainingSeconds;
  });

  // $ PLAYER 02
  const audio2 = document.querySelector('.audio2');
  const play2 = document.querySelector('.playBtn2');
  const prevBtn2 = document.querySelector('.prevBtn2');
  const nextBtn2 = document.querySelector('.nextBtn2');
  const progressBar2 = document.querySelector('.progress2');
  const timeElapsed2 = document.querySelector('.totalTime2');
  const timeLeft2 = document.querySelector('.timeLeft2');

  play2.addEventListener('click', () => {
    if (audio2.paused) {
      audio2.play();
      play2.innerHTML = '<img src="./assets/play.svg" alt="Play">';
    } else {
      audio2.pause();
      play2.innerHTML = '<img src="./assets/pause.svg" alt="Pause">';
    }
  });

  audio2.addEventListener('play', () => {
    play2.innerHTML = '<img src="./assets/pause.svg" alt="Pause">';
  });

  audio2.addEventListener('pause', () => {
    play2.innerHTML = '<img src="./assets/play.svg" alt="Play">';
  });

  prevBtn2.addEventListener('click', () => {
    audio2.currentTime -= 5;
  });

  nextBtn2.addEventListener('click', () => {
    audio2.currentTime += 5;
  });

  audio2.addEventListener('timeupdate', () => {
    const duration = audio2.duration;
    const currentTime = audio2.currentTime;
    const progressPercent = (currentTime / duration) * 100;

    progressBar2.style.setProperty('--w', progressPercent + '%');

    const elapsedMinutes = Math.floor(currentTime / 60);
    const elapsedSeconds = Math.floor(currentTime % 60);
    timeElapsed2.innerHTML =
      elapsedMinutes + ':' + (elapsedSeconds < 10 ? '0' : '') + elapsedSeconds;

    const remainingTime = duration - currentTime;
    const remainingMinutes = Math.floor(remainingTime / 60);
    const remainingSeconds = Math.floor(remainingTime % 60);
    timeLeft2.innerHTML =
      (remainingMinutes < 10 ? '0' : '') +
      remainingMinutes +
      ':' +
      (remainingSeconds < 10 ? '0' : '') +
      remainingSeconds;
  });

  // $ PLAYER 03
  const audio3 = document.querySelector('.audio3');
  const play3 = document.querySelector('.playBtn3');
  const prevBtn3 = document.querySelector('.prevBtn3');
  const nextBtn3 = document.querySelector('.nextBtn3');

  play3.addEventListener('click', () => {
    if (audio3.paused) {
      audio3.play();
      play3.innerHTML = '<img src="./assets/play.svg" alt="Play">';
    } else {
      audio3.pause();
      play3.innerHTML = '<img src="./assets/pause.svg" alt="Pause">';
    }
  });

  audio3.addEventListener('play', () => {
    play3.innerHTML = '<img src="./assets/pause.svg" alt="Pause">';
  });

  audio3.addEventListener('pause', () => {
    play3.innerHTML = '<img src="./assets/play.svg" alt="Play">';
  });

  prevBtn3.addEventListener('click', () => {
    audio3.currentTime -= 5;
  });

  nextBtn3.addEventListener('click', () => {
    audio3.currentTime += 5;
  });
});
