import React, { useEffect, useRef } from 'react';


function MP3Player({ audioUrl }) {
    const audioRef = useRef(null);
  
    useEffect(() => {
      if (audioUrl) {
        audioRef.current.load(); // Reload the audio element to play the new source
      }
    }, [audioUrl]);
  
    return (
      <div>
        {audioUrl ? (
          <audio controls ref={audioRef} src={audioUrl}>
            Your browser does not support the audio element.
          </audio>
        ) : (
          <p>Loading audio...</p>
        )}
      </div>
    );
  }

  export default MP3Player