export class Playlist {
  public playlist: Music[] = [
    {
      src: 'assets/audio/the_beatles_come_together_cover.mp3',
      title: 'The Beatles - Come Together',
    },
    {
      src: 'assets/audio/pink_floyd_learning_to_fly.mp3',
      title: 'Pink Floyd - Learning To Fly',
    },
    {
      src: 'assets/audio/the_beatles_love_me_do_cover.mp3',
      title: 'The Beatles - Love Me Do',
    },
  ]

  public currentTrackIndex: number = 0

  public get currentTrack() {
    return this.playlist[this.currentTrackIndex];
  }

  public get nextTrack() {
    this.currentTrackIndex = ++this.currentTrackIndex%this.playlist.length
    return this.currentTrack;
  }

  public get prevTrack() {
    this.currentTrackIndex = this.currentTrackIndex === 0
      ? this.playlist.length - 1
      : --this.currentTrackIndex%this.playlist.length
    return this.currentTrack;
  }
}

interface Music {
  src: string
  title: string
}
