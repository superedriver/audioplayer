import { AudioPlayer } from "./AudioPlayer";
import '../assets/css/app.styl'

new AudioPlayer(document.body)

const awesome = document.createElement('link')
awesome.rel = 'stylesheet'
awesome.href = 'https://use.fontawesome.com/releases/v5.4.1/css/all.css'

document.body.appendChild(awesome)
