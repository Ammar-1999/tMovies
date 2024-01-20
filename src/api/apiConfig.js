const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "bcee296b5552b8a4ad64436153b59fb9",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
