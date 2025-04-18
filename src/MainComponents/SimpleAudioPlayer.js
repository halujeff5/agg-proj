import React from 'react';

function SimpleAudioPlayer(url) {
    return (
      <div>
        <h3>My Simple MP3 Player</h3>
        <audio controls src={url}>
          Your browser does not support the audio element.
          {/* Fallback text for browsers that don't support the audio tag */}
        </audio>
      </div>
    );
  }

export default SimpleAudioPlayer