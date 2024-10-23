export const fetchAudio = async (audioData: string): Promise<Blob> => {
  const byteCharacters = atob(audioData);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  return new Blob([byteArray], { type: "audio/mp3" });
};
