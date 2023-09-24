export const imgPaths = [
  // src: https://www.freepik.com/free-vector/ripped-notes-rectangle-frame_16269733.htm#query=study%20aesthetic&position=18&from_view=keyword&track=ais
  '../images/rm118-nunoon-19.jpg',

  // src: https://unsplash.com/photos/AkUR27wtaxs
  '../images/unsplash-bridge.jpeg',

  // src: https://unsplash.com/photos/v7daTKlZzaw
  '../images/unsplash-mountain.jpeg',

  // src: https://unsplash.com/photos/0berjRl2uks
  '../images/unsplash-window.jpeg',

  //src: https://unsplash.com/photos/vSchPA-YA_A
  '../images/unsplash-desk.jpeg',
];

export const getRandomBackground = () => {
  const randomIndex = Math.floor(Math.random() * imgPaths.length);
  return imgPaths[randomIndex];
};
