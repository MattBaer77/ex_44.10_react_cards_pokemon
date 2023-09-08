import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";


// Accepts initiallyUp - true or false will determine if the default behavior will show front or back of card respectively

const useFlip = ( initiallyUp=true ) => {

    const [isFacingUp, setIsFacingUp] = useState(initiallyUp);
    const flipCard = () => {
      setIsFacingUp(isUp => !isUp);
    };

    return [isFacingUp, flipCard]

}

// Accepts baseUrl - returns an array of responses and a function setResponses which accepts an endPointName and makes an axios call to that baseUrl + endpoint + "/"
const useAxios = (baseUrl) => {

    const [responses, setResponses] = useState([]);
    const addResponse = async (endPointName) => {
      const response = await axios.get( (baseUrl + endPointName + "/")
      );
      setResponses(responses => [...responses, { ...response.data, id: uuid() }]);
    };

    return [responses, addResponse]

}

export  {useFlip, useAxios};