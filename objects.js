var playlist = {
  artistName: 'Taylor Swift',
  songTitle: 'Delicate'
}

function updatePlaylist (playlist, artistName, songTitle){
    playlist.assign({artistName}, {songTitle});
    return playlist;
}

function removeFromPlaylist (playlist, artistName) {

}
