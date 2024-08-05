import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Button, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

export default function AddCourseDialogUpload({ newCourseDetailsHandeler }) {
  const [sections, setSections] = useState([]);
  const [subsections, setSubsections] = useState([]);
  const [video, setVideo] = useState(null);

  const handleAddSection = () => {
    const newSection = {
      id: sections.length + 1,
      subsections: [],
    };
    setSections([...sections, newSection]);
  };

  const handleAddSubsection = (sectionId) => {
    const newSubsection = {
      id: sections[sectionId].subsections.length + 1,
    };
    const updatedSections = [...sections];
    updatedSections[sectionId].subsections.push(newSubsection);
    setSections(updatedSections);
  };
  // for section name ==================================
  const sectionNameHandeler = (event, sectionIndex) => {
    const newSection = [...sections];
    newSection[sectionIndex].sectionName = event.target.value;
    setSections(newSection);
    newCourseDetailsHandeler(newSection);
  };
  // for subsection text handel ====================]
  const subsectionTextHandler = (event, sectionIndex, subsectionIndex) => {
    const { value } = event.target;

    // Create a copy of sections to modify
    const updatedSections = [...sections];

    // Update the specific subsection's title
    updatedSections[sectionIndex].subsections[subsectionIndex].title = value;

    // Update state with the modified sections
    setSections(updatedSections);
    newCourseDetailsHandeler(updatedSections);
  };
  // for video upload to cloudinary ====================
  const videoUploadHandeler = () => {
    // if (video) {
    //   const formData = new FormData();
    //   formData.append("file", video);
    //   formData.append("upload_preset", "panditvideo"); // replace with your upload preset
    //   fetch(`https://api.cloudinary.com/v1_1/djabzrlh1/image/upload`, {
    //     method: "POST",
    //     body: formData,
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("Upload successful:", data);
    //       // Handle successful upload (e.g., show success message, update UI)
    //     })
    //     .catch((error) => {
    //       console.error("Error uploading file:", error);
    //       // Handle error (e.g., show error message, retry upload)
    //     });
    // }
  };
  return (
    <div>
      <ButtonGroup variant="contained" color="secondary">
        <Button onClick={handleAddSection}>
          <AddIcon /> Add Section
        </Button>
      </ButtonGroup>

      {sections.map((section, sectionIndex) => (
        <div key={`section-${section.id}-subsections`}>
          <Stack
            key={section.id}
            direction="row"
            sx={{ alignContent: "center", gap: "1rem", marginTop: "1rem" }}
          >
            <Typography variant="h6"> {sectionIndex + 1}.</Typography>
            <TextField
              label={`Section ${sectionIndex + 1}`}
              variant="outlined"
              size="small"
              sx={{ marginBottom: "1rem" }}
              onChange={(event) => sectionNameHandeler(event, sectionIndex)}
              value={sections[sectionIndex].sectionName}
            />
            <AddIcon
              color="secondary"
              style={{ cursor: "pointer" }}
              onClick={() => handleAddSubsection(sectionIndex)}
            />{" "}
            Add subsection
            {/* <CancelIcon color="secondary" style={{ cursor: "pointer" }} /> */}
          </Stack>

          {section.subsections.map((subsection, subsectionIndex) => (
            <>
              <Stack
                key={subsection.id}
                direction="row"
                sx={{ alignItems: "center", gap: "1rem", marginLeft: "3.5rem" }}
              >
                <TextField
                  label={`Subsection ${subsectionIndex + 1} of Section ${
                    sectionIndex + 1
                  }`}
                  value={subsection.title}
                  sx={{ marginBottom: "1rem" }}
                  variant="outlined"
                  size="small"
                  onChange={(event) =>
                    subsectionTextHandler(event, sectionIndex, subsectionIndex)
                  }
                />
                <input
                  type="file"
                  // accept="video/"
                  onChange={(e) => setVideo(e.target.files[0])}
                />
                <Button variant="outlined" onClick={videoUploadHandeler}>
                  Upload
                </Button>
                {/* <CheckCircleIcon
                color="secondary"
                style={{ cursor: "pointer" }}
              /> */}
                {/* <CancelIcon color="secondary" style={{ cursor: "pointer" }} /> */}
              </Stack>
            </>
          ))}
          {/* <Button
            variant="contained"
            color="secondary"
            sx={{ marginTop: "1rem" }}
          >
            <CheckCircleIcon color="3fff" style={{ cursor: "pointer" }} /> Done{" "}
          </Button> */}
        </div>
      ))}
    </div>
  );
}
