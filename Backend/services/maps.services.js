const axios = require("axios");
const captainModel = require("../models/captain.model");
module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.GO_MAPS_API;
  if (!apiKey) {
    throw new Error("Google Maps API key is missing");
  }
  const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    console.log(response.data);
    if (response.data.status === "OK") {
      console.log("hello");
      const location = response.data.results[0].geometry.location;

      return {
        lng: location.lng,
        ltd: location.lat,
      };
    } else {
      throw new Error("Unable to fetch coordinates");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and Destination are required");
  }
  const apiKey = process.env.GO_MAPS_API;
  const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?destinations=${encodeURIComponent(
    destination
  )}&origins=${encodeURIComponent(origin)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      // console.log(response.data)
      if (response.data.rows[0].elements[0].status === "ZERO_RESULTS") {
        throw new Error("No routes found");
      }

      return response.data.rows[0].elements[0];
    } else {
      throw new Error("Unable to fetch distance and time");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error("Query is required");
  }

  const apiKey = process.env.GO_MAPS_API;
  const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    input
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      // return response.data.predictions;
      return response.data.predictions
        .map((prediction) => prediction.description)
        .filter((value) => value);
    } else {
      throw new Error("Unable to fetch auto-complete suggestions");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports.getCaptainsInTheRadius = async (lng, ltd, radius) => {
  // radius in km
  console.log(radius);

  try {
    const captains = await captainModel.find({
      location: {
        $geoWithin: {
          $centerSphere: [[lng, ltd], radius / 6371],
        },
      },
    });
    console.log("Captains: ", captains);
    return captains;
  } catch (error) {
    console.log(error);
  }
};
