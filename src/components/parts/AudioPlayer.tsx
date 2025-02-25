import { useRef, useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface AudioPlayerProps {
  audioUrl: string;
}

const AudioPlayer = ({ audioUrl }: AudioPlayerProps): JSX.Element => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect((): (() => void) | void => {
    const audioElement: HTMLAudioElement | null = audioRef.current;
    if (!audioElement) return;

    const handlePlay = (): void => {
      setIsPlaying(true);
    };

    const handleEnded = (): void => {
      setIsPlaying(false);
    };

    const handleError = (): void => {
      setIsPlaying(false);
    };

    audioElement.addEventListener('play', handlePlay);
    audioElement.addEventListener('ended', handleEnded);
    audioElement.addEventListener('error', handleError);

    return (): void => {
      audioElement.removeEventListener('play', handlePlay);
      audioElement.removeEventListener('ended', handleEnded);
      audioElement.removeEventListener('error', handleError);
    };
  }, []);

  const handlePlayClick = (): void => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: '50%',
        bgcolor: isPlaying ? 'success.main' : 'primary.main',
        boxShadow: '1px 3px 2px -1px rgba(0, 0, 0, 0.4)',
      }}
    >
      <IconButton onClick={handlePlayClick} sx={{ fontSize: '4rem' }}>
        <PlayArrowIcon fontSize="inherit" sx={{ color: isPlaying ? 'grey.200' : 'white' }} />
      </IconButton>
      <audio ref={audioRef} src={audioUrl} style={{ display: 'none' }} />
    </Box>
  );
};

export default AudioPlayer;
