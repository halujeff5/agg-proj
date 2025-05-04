import React, { useRef } from 'react';
import '../App.css'


function MP3Player({ audioUrl, error }) {
    console.log(error)
    console.log(audioUrl)

    
  const audioRef = useRef(null);
    
    return (
      <div>
        {audioUrl ? (
          <>
          <audio className= 'audioPill' preload = 'auto' controls ref={audioRef} src={audioUrl}>
            Your browser does not support the audio element.
          </audio>
       <h4>{error}</h4>
       </>
        ) : (
          <>
          <audio className= 'audioPill' preload = 'auto' controls ref={audioRef} src={audioUrl}>
        </audio>
        <h4>{error}</h4>
        </>
        )}
            
      </div>
    );
  }

  export default MP3Player