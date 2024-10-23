export const playAudio = (audioBlob: Blob) => {
  const audioUrl = URL.createObjectURL(audioBlob);
  const audio = new Audio(audioUrl);
  audio.play();

  // Optional: Revoke the object URL after the audio has finished playing
  audio.onended = () => {
    URL.revokeObjectURL(audioUrl);
  };
};
