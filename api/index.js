import axios from "axios";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete",
      {
        params: { query: "jaipur", lang: "en_US", units: "km" },
        headers: {
          "X-RapidAPI-Key":
            "7993b7c067msh9d4e345bf6758f0p12f89djsnc09cef57b722",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    return null;
  }
};
