import React from "react";

const isIncome = Math.random(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 9%" }}>
      Try Saying : <br />
      Add {isIncome ? "Income " : "Expense "}
      for {isIncome ? "100 Rupee " : "50 Rupees "}
      in Category {isIncome ? "Salary " : "House "}
      for {isIncome ? "Next Monday " : "Wednesday "}....
    </div>
  );
};

export default InfoCard;
