import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const getMovieIds = async (name: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        accept: "application/json",
      },
    }
  );
  return response.data;
};

export const getMovieDetails = async (id: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        accept: "application/json",
      },
    }
  );
  return response.data;
};

export const getMovieCredits = async (id: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        accept: "application/json",
      },
    }
  );
  return response.data;
};

export const getMovieRecommendations = async (id: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        accept: "application/json",
      },
    }
  );
  return response.data;
};

export const getMovieTrailers = async (id: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        accept: "application/json",
      },
    }
  );
  return response.data;
};
