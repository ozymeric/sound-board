
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
  let button = document.createElement("button");

  document.getElementById("buttons").appendChild(button);

  button.classList.add("btn");
  button.innerText = sound;

  button.addEventListener("click", () => {
    stopSounds();
    document.querySelector(`#${sound}`).play();
  })
})
// now when we click on a button, we hear the corresponding sound
// effect but when we click on another button right after clicking
// one, both sounds overlap and we hear both of them.

//So let's write another function to prevent this.

function stopSounds() {
  sounds.forEach(sound => {
    document.getElementById(sound).pause();
    document.getElementById(sound).currentTime = 0;
  })
}
// now let's go back and add this to our previous eventListener
// for button elements above so this function works properly.

/*
##################################################################
##################################################################
######################### UDEMY SOLUTION #########################
##################################################################
##################################################################
*/
/*
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}
*/
