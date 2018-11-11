const PLAY_CLASS_NAME: string = 'fa-play';
const PAYSE_CLASS_NAME: string = 'fa-pause';

export class PlayControl {
  public $icon = document.createElement('i')

  constructor(public $root: HTMLElement, onTogglePlayCallback: any) {
    this.$icon.classList.add('play-control', 'icon', 'fas', PLAY_CLASS_NAME)
    this.$root.appendChild(this.$icon)

    this.$icon.addEventListener('click', () => {
      onTogglePlayCallback()
    })
  }

  public toggleControlIcon(isPaused: boolean) {
    isPaused ? this.setPlayIcon() : this.setPauseIcon()
  }

  public setPauseIcon() {
    this.$icon.classList.remove(PLAY_CLASS_NAME)
    this.$icon.classList.add(PAYSE_CLASS_NAME)
  }

  public setPlayIcon() {
    this.$icon.classList.remove(PAYSE_CLASS_NAME)
    this.$icon.classList.add(PLAY_CLASS_NAME)
  }
}
