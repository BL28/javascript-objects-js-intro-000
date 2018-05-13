var playlist = {
  artistName: 'Taylor Swift',
  songTitle: 'Delicate'
}

function updatePlaylist(playlist, artistName, songTitle){
    playlist.artistName = artistName;
    playlist.songTitle = songTitle;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.artistName;
}
