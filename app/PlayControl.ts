const playClassName: string = 'fa-play';
const pauseClassName: string = 'fa-pause';

export class PlayControl {
  public $icon = document.createElement('i')

  constructor(public $root: HTMLElement, onTogglePlayCallback: any) {
    this.$icon.classList.add('play-control', 'icon', 'fas', playClassName)
    this.$root.appendChild(this.$icon)

    this.$icon.addEventListener('click', () => {
      onTogglePlayCallback()
    })
  }

  public toggleControlIcon(isPaused: boolean) {
    isPaused ? this.setPlayIcon() : this.setPauseIcon()
  }

  public setPauseIcon() {
    this.$icon.classList.remove(playClassName)
    this.$icon.classList.add(pauseClassName)
  }

  public setPlayIcon() {
    this.$icon.classList.remove(pauseClassName)
    this.$icon.classList.add(playClassName)
  }
}
