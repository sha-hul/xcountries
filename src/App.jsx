import CountryCard from "./Component/CountryCard";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://xcountries-backend.azurewebsites.net/all"
        );
        setCountries(response.data);
      } catch (error) {
                console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      console.log("Clean Up");
    };
  }, []);

  return (
    <div id="wrapper">
      {countries.map((item,index) => (
        <CountryCard key={index} country={item} />
      ))}
    </div>
  );
};

export default App;
