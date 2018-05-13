var playlist = {
  artistName: 'Taylor Swift',
  songTitle: 'Delicate'
}

function updatePlaylist(playlist, artistName, songTitle){
    playlist.artistName = artistName;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.artistName;
}
