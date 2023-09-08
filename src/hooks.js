import React, { useState } from "react";

// Accepts initiallyUp - true or false will determine if the default behavior will show front or back of card respectively

const useFlip = ( initiallyUp=true ) => {

    const [isFacingUp, setIsFacingUp] = useState(initiallyUp);
    const flipCard = () => {
      setIsFacingUp(isUp => !isUp);
    };

    return [isFacingUp, flipCard]

}

export default useFlip;