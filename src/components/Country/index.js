import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Styled from "./styled";
import Item from "../Item";
import { CountryDropdown } from "react-country-region-selector";
import { Codes } from "../codes";
import "./index.css";

export const GRAPHQL_API = "https://countries.trevorblades.com/";

const Country = () => {
  const [data, setData] = useState({ country: [] });
  const [coun, setCoun] = useState("Armenia");
  const [code, setCode] = useState("AM");
  const [isfound, setIsfound] = useState(false);

  useEffect(() => {
    setIsfound(false);
    Codes.map((item) => {
      if (coun === item.name) {
        setCode(item.code);
        setIsfound(true);
      }
    });
  }, [coun]);

  const GET_COUNTRIES = `
 { 
country(code: "${code}" ) {
name
native
capital
emoji
currency
languages {
code
name
}
}
}
`;
  useEffect(() => {
    const fetchData = async () => {
      const queryResult = await axios.post(GRAPHQL_API, {
        query: GET_COUNTRIES,
      });

      const result = queryResult.data.data;
      setData({ country: result.country });
    };

    fetchData();
  }, [code]);

  const handleCountry = (value) => {
    setCoun(value);
  };

  return (
    <Styled.Box>
      <CountryDropdown
        className="dropdown"
        value={coun}
        required
        onChange={handleCountry}
      />

      <Item isFound={isfound} country={data.country} />
    </Styled.Box>
  );
};

export default React.memo(Country);
