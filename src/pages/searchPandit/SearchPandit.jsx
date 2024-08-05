import { Box, Button, Paper, Stack } from "@mui/material";
import AllPanditContainer from "./component/AllPanditContainer";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Container,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { hinduPujaList } from "../../data";
import { useParams } from "react-router-dom";

export default function SearchPandit() {
  const [allPandit, setAllPandit] = useState([]);
  const [suggestions, setSuggetions] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openSuggetion, setOpenSuggetion] = useState(false);
  const [selectSuggetion, setSelectSuggetion] = useState("");
  const { id } = useParams();
  const [searchValue, setSearchValue] = useState(id ? id : "");

  const [searchText, setSearchText] = useState(id);

  console.log(allPandit);

  const boxRef = useRef();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // cons;

  useEffect(() => {
    const fetchAllPandit = async () => {
      const res = await axios.get("http://localhost:8000/posts?userType=1");
      console.log(res.data);
      setAllPandit(res.data);

      console.log(searchText);
      if (searchText) {
        const searchTextLower = searchText.toLowerCase(); // Convert search text to lowercase

        const filteredItems = res.data.filter((item) => {
          // Convert keys to lowercase and check if searchText matches any key in myPujaWiseSamagriList
          const pujaWiseSamagriList = item.mySamagriList.myPujaWiseSamagriList;
          return Object.keys(pujaWiseSamagriList).some(
            (key) => key.toLowerCase() === searchTextLower
          );
        });

        setAllPandit(filteredItems);
      }
    };

    fetchAllPandit();

    // if (id) {
    //   setSearchValue(id);
    // }

    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setOpenSuggetion(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchText]);

  // handeler ======================
  const searchHandle = (event) => {
    setOpenSuggetion(true);
    handleClick(event);
    // console.log(item.toLowerCase());
    const response = hinduPujaList.filter((item) =>
      item.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSuggetions(response);
    setSearchValue(event.target.value);
  };
  const searchPanditFn = async () => {
    const res = await axios.get();
  };
  console.log(searchValue);
  console.log(searchText);
  // for seacth button handeler ==================
  const searchFn = () => {
    setSearchText(searchValue);
    setOpenSuggetion(false);
  };

  return (
    <>
      <Paper>
        <Stack direction="row">
          <Box
            bgcolor="secondary.dark"
            sx={{
              width: 1.3 / 8,
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: "1.5rem", position: "relative" }}
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={checkboxes.option1}
                      // onChange={handleChange}
                      name="option1"
                    />
                  }
                  label="Option 1"
                />
              </FormGroup>
            </Box>
          </Box>

          {/* <AppBar position="static"></AppBar> */}

          <Box
            bgcolor="#ffd"
            sx={{
              width: 6.7 / 8,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <TextField
                fullWidth
                label="Search puja"
                onChange={searchHandle}
                value={searchValue}
                sx={{
                  width: "60%",

                  borderRadius: "40px",
                  backgroundColor: "#fff",
                  outline: "none",
                  border: "none",
                  backgroundColor: "#fff",
                  outline: "none",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "1px solid black",
                      outline: "none",
                      borderRadius: "25px",
                    },
                    "&:hover fieldset": {
                      outline: "none",
                      borderRadius: "25px",
                      border: "1px solid black",
                    },
                    "&.Mui-focused fieldset": {
                      outline: "none",
                      borderRadius: "25px",
                      border: "1px solid black",
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{ marginLeft: "1rem", borderRadius: "25px" }}
                onClick={searchFn}
              >
                Search
              </Button>
            </Box>
            {/* // for suggetion box ================================================== */}
            <Box mx={25}>
              {openSuggetion && (
                <Box
                  ref={boxRef}
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  sx={{
                    marginTop: ".1rem",
                    maxHeight: "20rem",
                    position: "absolute",
                    zIndex: 99,
                    overflowY: "scroll",
                    width: "40rem",
                    border: "1px solid black",
                    backgroundColor: "#eee",
                  }}
                >
                  {suggestions.length == 0 ? (
                    <MenuItem
                      sx={{
                        backgroundColor: "#eee",
                        zIndex: 199,
                        marginBottom: "2rem",
                        "&:hover": {
                          zIndex: 199,
                          backgroundColor: "#eee",
                        },
                      }}
                    >
                      No results found
                    </MenuItem>
                  ) : (
                    suggestions.map((suggestion, index) => (
                      <MenuItem
                        sx={{
                          backgroundColor: "#eee",
                          "&:hover": {
                            backgroundColor: "secondary.main",
                            zIndex: 199,
                            color: "#fff",
                          },
                        }}
                        key={index}
                        onClick={() => {
                          setOpenSuggetion(false);
                          setSearchText(suggestion);
                          setOpenSuggetion(false);
                          setSearchValue(suggestion);
                        }}
                      >
                        {suggestion}
                      </MenuItem>
                    ))
                  )}
                </Box>
              )}
            </Box>

            <AllPanditContainer allPandit={allPandit} selectPuja={searchText} />
          </Box>
        </Stack>
      </Paper>
    </>
  );
}
