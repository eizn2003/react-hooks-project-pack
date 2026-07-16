import { Search } from "../search";
import { useEffect, useState } from "react";

export const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=f970f2ad30d9f78c88ba954cdd24f2b9`,
      );
      const data = await response.json();

      console.log("Weather data:", data);

      if (data) {
        setWeatherData(data);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch() {
    if (!search) return;
    fetchWeatherData(search);
  }

  useEffect(() => {
    fetchWeatherData("Kigali");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-teal-50 to-emerald-50 p-6">
      <div className="w-full max-w-2xl bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl shadow-2xl p-6 md:p-8">
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />

        {loading ? (
          <div className="mt-6 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full border-4 border-t-blue-500 border-gray-200 animate-spin" />
              <span className="mt-3 text-gray-700 font-medium">Loading...</span>
            </div>
          </div>
        ) : (
          weatherData &&
          weatherData.main && (
            <div className="mt-6 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600 text-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold">
                    {weatherData.name}
                  </h2>
                  <h3 className="text-lg md:text-xl font-extrabold">
                    {weatherData.sys?.country || "N/A"}
                  </h3>
                  <p className="mt-1 text-sm md:text-base opacity-90 capitalize">
                    {weatherData.weather?.[0]?.description || "N/A"}
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-baseline">
                    <span className="text-6xl md:text-7xl font-bold">
                      {Math.round((weatherData.main.temp ?? 273.15) - 273.15)}
                    </span>
                    <span className="ml-2 text-lg md:text-xl">°C</span>
                  </div>

                  <div className="hidden md:block w-[1px] h-14 bg-white/30" />

                  <div className="text-sm md:text-base space-y-1 text-white/95">
                    <div>
                      <span className="font-medium">Humidity:</span>{" "}
                      {weatherData.main.humidity}%
                    </div>
                    <div>
                      <span className="font-medium">Wind:</span>{" "}
                      {weatherData.wind?.speed ?? "N/A"} m/s
                    </div>
                    <div>
                      <span className="font-medium">Pressure:</span>{" "}
                      {weatherData.main.pressure} hPa
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm text-white/90">
                <p>
                  Coordinates: {weatherData.coord?.lat ?? "N/A"},{" "}
                  {weatherData.coord?.lon ?? "N/A"}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};