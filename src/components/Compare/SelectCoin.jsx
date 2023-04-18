import React from "react";
import { MenuItem, Select } from "@mui/material";

import SelectDays from "../Coin/SelectDays/SelectDays";
import "./style.css";

const SelectCoin = ({
  allCoins,
  coin1,
  coin2,
  days,
  handleCoinChange,
  handleDaysChange,
}) => {
  const selectStyle = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  return (
    <div className="select-flex">
      <p>Crypto 1</p>
      <Select
        value={coin1}
        sx={selectStyle}
        className="select-coin"
        onChange={(e) => handleCoinChange(e, true)}
      >
        {allCoins
          .filter((coin) => coin.id != coin2)
          .map((coin, index) => (
            <MenuItem key={index} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>

      <p>Crypto 2</p>
      <Select
        value={coin2}
        sx={selectStyle}
        className="select-coin"
        onChange={(e) => handleCoinChange(e, true)}
      >
        {allCoins
          .filter((coin) => coin.id != coin1)
          .map((coin, index) => (
            <MenuItem key={index} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>

      <SelectDays
        days={days}
        noText={true}
        handleCoinChange={(e) => handleDaysChange(e)}
      />
    </div>
  );
};

export default SelectCoin;
