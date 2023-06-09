import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import "./Textfield.scss";

interface Props {
  label: string;
  value: string;
  onChange: (e: any) => void;
  inputProps?: any;
}

export default function Textfield(props: Props) {
  const { label, value, onChange } = props;

  return (
    <Box className="textfield__container">
      <TextField
        data-cy={props.inputProps?.["data-cy"]}
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
        label={label}
        value={value}
        onChange={onChange}
        variant="standard"
        fullWidth
      />
    </Box>
  );
}
