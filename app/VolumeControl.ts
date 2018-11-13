import { INITIAL_VOLUME_VALUE } from './constants'
import { Tooltip } from './Tooltip'
import { bootstrap } from "./helpers"

// additional code
const convertTooltipText = (value: number): string => {
  return `${Math.round(value * 100)}%`
}

export class VolumeControl {
  public $elem: HTMLElement = document.createElement('span')
  public $icon: HTMLElement = document.createElement('i')
  public $volumeControl: HTMLInputElement = document.createElement('input')
  public tooltip: Tooltip

  constructor(public $root: HTMLElement, onVolumeChange: any) {
    this.$elem.classList.add('volume-control-wrapper')
    this.$icon.classList.add('icon', 'fas', 'fa-volume-off')
    this.tooltip = new Tooltip(this.$elem, convertTooltipText(INITIAL_VOLUME_VALUE))

    this.$volumeControl.type = 'range'
    this.$volumeControl.min = '0'
    this.$volumeControl.max = '1'
    this.$volumeControl.step = '0.01'
    this.$volumeControl.value = `${INITIAL_VOLUME_VALUE}`
    this.$volumeControl.classList.add('volume-control', 'hidden')

    bootstrap(this.$elem, this.$icon, this.$volumeControl)
    bootstrap(this.$root, this.$elem)

    this.$volumeControl.addEventListener('change', (e: any) => {
      const volumeValue: string = e.target.value

      onVolumeChange(volumeValue)
      this.tooltip.changeLabelText(convertTooltipText(parseFloat(volumeValue)))
    })

    this.$icon.addEventListener('click', (e) => {
      e.stopPropagation();
      this.$volumeControl.classList.toggle('hidden')
    })

    document.body.addEventListener('click', (e) => {
      const eventTarget = e.target as HTMLInputElement
      if (!eventTarget.classList.contains('volume-control')) {
        this.$volumeControl.classList.add('hidden')
      }
    })
  }
}
