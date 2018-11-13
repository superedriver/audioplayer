// classs import
import { PlayControl } from './PlayControl'
import { VolumeControl } from './VolumeControl'
import { Playlist } from './Playlist'
import { Favorite } from './FavoriteBtn'
import { ProgressBar } from './ProgressBar'

// import from helpers
import { bootstrap } from "./helpers"

// import from constants
import { INITIAL_VOLUME_VALUE } from './constants'

export class AudioPlayer {
  public $elem: HTMLElement = document.createElement('div')
  public favoriteBtn: Favorite
  public $nextBtn: HTMLElement = document.createElement('i')
  public $previousBtn: HTMLElement = document.createElement('i')
  public $audio: HTMLAudioElement = document.createElement('audio')
  public $trackName: HTMLElement = document.createElement('div')
  public volumeControl: VolumeControl
  public playControlBtn: PlayControl
  public playlist: Playlist
  public progressBar: ProgressBar

  constructor(public $root: HTMLElement) {
    this.$elem.classList.add('audio-player')

    let logo = document.createElement('div')
    logo.classList.add('player-logo')
    bootstrap(this.$elem, logo)

    this.progressBar = new ProgressBar(this.$elem)

    let panel = document.createElement('div')
    panel.classList.add('logo-panel')
    bootstrap(logo, panel)

    this.$trackName.classList.add('track-name')
    bootstrap(this.$elem, this.$trackName)

    this.$nextBtn.classList.add('icon', 'next-btn', 'fas', 'fa-fast-forward')
    this.$previousBtn.classList.add('icon', 'previous-btn', 'fas', 'fa-fast-backward')

    // Play Prev Next
    let songControls = document.createElement('span')
    songControls.classList.add('song-controls')
    this.playControlBtn = new PlayControl(songControls, this.togglePlay.bind(this))
    bootstrap(songControls, this.$previousBtn, this.$nextBtn)

    let allControls = document.createElement('div')
    allControls.classList.add('audio-controls')

    this.favoriteBtn = new Favorite(allControls)

    bootstrap(allControls, songControls)
    this.volumeControl = new VolumeControl(allControls, this.handleVolumeChange.bind(this))
    bootstrap(this.$elem, allControls)

    this.playlist = new Playlist();
    this.$audio.volume = INITIAL_VOLUME_VALUE
    this.$audio.src = this.playlist.currentTrack.src
    this.$trackName.innerHTML = this.playlist.currentTrack.title

    bootstrap(this.$root, this.$audio, this.$elem)

    this.$nextBtn.addEventListener('click', this.playNext.bind(this))
    this.$previousBtn.addEventListener('click', this.playPrevious.bind(this))
    this.$audio.addEventListener('ended', this.playNext.bind(this))
    this.$audio.addEventListener('timeupdate', () => {
      const value = this.$audio.currentTime/this.$audio.duration || 0

      this.progressBar.setProgressValue(value)
    })
  }

  public reloadTrack() {
    this.$audio.load()
    this.$audio.play()
    this.playControlBtn.toggleControlIcon(this.$audio.paused)
  }

  public playPrevious() {
    const prevTrack = this.playlist.prevTrack
    this.setAudioSrc(prevTrack.src)
    this.setTrackTitle(prevTrack.title)
    this.reloadTrack()
  }

  public playNext() {
    const nextTrack = this.playlist.nextTrack

    this.setAudioSrc(nextTrack.src)
    this.setTrackTitle(nextTrack.title)
    this.reloadTrack()
  }

  public togglePlay() {
    this.$audio.paused ? this.$audio.play() : this.$audio.pause()
    this.playControlBtn.toggleControlIcon(this.$audio.paused)
  }

  public setTrackTitle(title: string) {
    this.$trackName.innerHTML = title
  }

  public setAudioSrc(src: string) {
    this.$audio.src = src
  }

  public handleVolumeChange(volumeValue: string) {
    this.$audio.volume = parseFloat(volumeValue)
  }
}
