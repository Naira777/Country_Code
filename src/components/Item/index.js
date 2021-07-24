import React from "react";
import * as Styled from "./styled";

const Item = ({ country, isFound }) => {

   let langs

   if (country.languages != undefined ){

    if( country.languages.length >1){
      langs= true
    }
    else{
      langs = false
    }
  }




  return (
    <Styled.Box key={Math.random()}>
      {!isFound && <Styled.Box1>There is no information </Styled.Box1>}

      {isFound && (
        <Styled.Box1>
          <li>
            Capital of <b>{country.name}</b> is <b>{country.capital}</b>{" "}
          </li>
          <li>
            Emoji of the country is <b>{country.emoji}</b>
          </li>
          <li>
            The native is <b>{country.native}</b>
          </li>
          <li>
            Currency is <b>{country.currency}</b>
          </li>
          <li>{ langs?   `Languages are` : `Language is`  }</li>
          {country.languages != null &&
            country.languages.map((element) => {
              return (
                <div key={element}>
                  <b>{element.name} </b>{" "}
                </div>
              );
            })}
        </Styled.Box1>
      )}
    </Styled.Box>
  );
};

export default React.memo(Item);
