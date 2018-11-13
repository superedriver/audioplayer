import { AudioPlayer } from "./AudioPlayer";
import '../assets/css/app.styl'
import { bootstrap } from "./helpers"

new AudioPlayer(document.body)

const awesome = document.createElement('link')
awesome.rel = 'stylesheet'
awesome.href = 'https://use.fontawesome.com/releases/v5.4.1/css/all.css'

bootstrap(document.body, awesome)
