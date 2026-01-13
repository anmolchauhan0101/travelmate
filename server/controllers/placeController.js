const axios = require("axios");

/**
 * SEARCH CITIES (already working – keep)
 */
exports.searchPlaces = async (req, res) => {
  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: req.params.query,
          format: "json",
          limit: 10,
        },
        headers: {
          "User-Agent": "TravelMate-App",
        },
      }
    );

    const cities = response.data
      .filter(
        (item) =>
          item.type === "city" ||
          item.type === "town" ||
          item.type === "village"
      )
      .map((item) => ({
        name: item.display_name.split(",")[0],
        country: item.address?.country || "",
      }));

    res.json({ cities });
  } catch (err) {
    res.status(500).json({ cities: [] });
  }
};

/**
 * ✅ PLACES TO VISIT (FIXED)
 */
exports.getPlacesToVisit = async (req, res) => {
  const city = req.params.city;

  try {
    // Wikipedia API (FREE)
    const wikiRes = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        city
      )}`
    );

    res.json({
      city,
      title: wikiRes.data.title,
      description: wikiRes.data.extract,
      image: wikiRes.data.thumbnail?.source || null,
      wikipedia: wikiRes.data.content_urls?.desktop?.page || null,
      googleMaps: `https://www.google.com/maps/search/places+to+visit+in+${encodeURIComponent(
        city
      )}`,
    });
  } catch (err) {
    res.json({
      city,
      description:
        "Detailed attractions data not available for this city.",
      image: null,
      wikipedia: null,
      googleMaps: `https://www.google.com/maps/search/places+to+visit+in+${encodeURIComponent(
        city
      )}`,
    });
  }
};









