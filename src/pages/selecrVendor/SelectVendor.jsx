import React, { useEffect, useState } from "react";
// import VendorCard from "../../components/UI/component/vendorCard/VendorCard";
import axios from "axios";
import VendorCard from "../../components/UI/component/vendorCard/VendorCard";
import { Box, Button, Stack, Typography } from "@mui/material";
import SelectVendorSidebar from "./component/selectVendorSidebar/SelectVendorSidebar";
import ListIcon from "@mui/icons-material/List";
import { useDispatch, useSelector } from "react-redux";
import SelectVendorCard from "./component/selectVendorCard/SelectVendorCard";
import { vendorAndSamagriAction } from "../../Redux/vendorSlice";
import { useNavigate } from "react-router-dom";

export default function SelectVendor() {
  const [vendorList, setVendorList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const samagriList = useSelector((item) => item.samagriList);

  const [selectedSamagriList, setSelectedSamageiList] = useState(samagriList);
  // for sidebar drawer
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const fetchAllVandor = async () => {
      const res = await axios.get(`http://localhost:8000/posts?userType=3`);

      const filteredVendors = res.data.filter((vendor) => {
        if (vendor.pujaSamagri) {
          return Object.keys(selectedSamagriList).every((item) => {
            return vendor.pujaSamagri.some(
              (userItem) => userItem.selectItem === item
            );
          });
        }
        return false;
      });

      setVendorList(filteredVendors);
    };
    fetchAllVandor();
  }, [selectedSamagriList]);

  // handeler for user's selected item check and uncheck from sidebar
  const selectedSamagriFn = (value) => {
    if (selectedSamagriList[value]) {
      const newSamagriList = { ...selectedSamagriList };
      delete newSamagriList[value];
      setSelectedSamageiList(newSamagriList);
    } else {
      setSelectedSamageiList((old) => ({
        ...old,
        [value]: samagriList[value],
      }));
    }
  };
  // for edit quantity and unit by user from sidebar
  const selecSamagariEditFn = (value) => {
    setSelectedSamageiList(value);
  };

  // for user order button ======================================

  const orderFuntion = (vendor, calculatedList) => {
    console.log(vendor);
    console.log(calculatedList);
    const newCalculatedList = { ...calculatedList };
    delete newCalculatedList.price;
    console.log(newCalculatedList);
    dispatch(
      vendorAndSamagriAction({
        vendorDetails: vendor,
        samagriList: calculatedList,
      })
    );
    navigate("/cart");
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
          padding: "0 2rem",
        }}
      >
        <Typography variant="h4" color="secondary" gutterBottom>
          Choose any vendor:
        </Typography>
        <Button onClick={toggleDrawer(true)}>
          <Stack direction="row" sx={{ alignItems: "center", gap: ".5rem" }}>
            <ListIcon fontSize="large" color="secondary" />
            <Typography variant="h6" color="secondary">
              <strong>Show Puja Samagri</strong>
            </Typography>
          </Stack>
        </Button>
      </Stack>

      <Stack
        direction="row"
        sx={{
          rowGap: "2rem",
          columnGap: "1.5rem",
          flexWrap: "wrap",
          justifyContent: "center ",
        }}
      >
        {vendorList.map((item, index) => {
          return (
            <SelectVendorCard
              key={index}
              vendor={item}
              selectedSamagriList={selectedSamagriList}
              orderFuntion={orderFuntion}
            />
          );
        })}
      </Stack>
      <SelectVendorSidebar
        open={open}
        toggleDrawer={toggleDrawer}
        samagriList={samagriList}
        selectedSamagriList={selectedSamagriList}
        selectedSamagriFn={selectedSamagriFn}
        selecSamagariEditFn={selecSamagariEditFn}
      />
    </Box>
  );
}
