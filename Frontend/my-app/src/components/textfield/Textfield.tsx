import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import "./Textfield.scss";

export default function Textfield() {
  return (
    <Box className="textfield__container">
      <TextField
        InputProps={{
          style: { color: "white" },
        }}
        InputLabelProps={{
          style: { color: "white" },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white !important",
            },
            "&:hover fieldset": {
              borderColor: "white !important",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white !important",
            },
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "white",
          },
        }}
        autoComplete="off"
        id="standard-basic"
        label="Standard"
        variant="standard"
        fullWidth
      />
    </Box>
  );
}
