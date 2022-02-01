import React from "react";

function additionGenerator() {
  const additionNumbers = {
    number1: 12,
    number2: 13,
  };

  return (
    <div>
      {additionNumbers.number1} + {additionNumbers.number2}
    </div>
  );
}

export default additionGenerator;
