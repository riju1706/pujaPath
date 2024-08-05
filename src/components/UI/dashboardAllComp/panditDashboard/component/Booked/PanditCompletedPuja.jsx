import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import CompletedCard from "./component/CompletedCard";

export default function PanditCompletedPuja({ user }) {
  // Sample tasks data (replace with your actual task data)
  console.log(user);
  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description: "Description of Task 1",
      completed: false,
      date: "2024-05-03",
    },
    {
      id: 4,
      title: "Task 2",
      description: "Description of Task 2",
      completed: false,
      date: "2024-05-04",
    },
    {
      id: 2,
      title: "Task 3",
      description: "Description of Task 2",
      completed: false,
      date: "2024-05-05",
    },
    {
      id: 3,
      title: "Task 4",
      description: "Description of Task 2",
      completed: false,
      date: "2024-05-04",
    },
    {
      id: 5,
      title: "Task 2",
      description: "Description of Task 2",
      completed: false,
      date: "2024-05-06",
    },
    {
      id: 6,
      title: "Task 2",
      description: "Description of Task 2",
      completed: false,
      date: "2024-05-07",
    },
    // Add more tasks as needed
  ];

  const [selectedDateTasks, setSelectedDateTasks] = React.useState([]);

  // Event handler for date selection
  const handleDateSelect = (date) => {
    console.log("date");
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    const uncompletedTasks = tasks.filter(
      (task) => task.date === formattedDate && !task.completed
    );
    setSelectedDateTasks(uncompletedTasks);
  };

  return (
    // <div style={{ height: "200vh" }}>
    //   <Card>
    //     <CardContent sx={{ width: "400px" }}>
    //       <LocalizationProvider dateAdapter={AdapterDayjs}>
    //         <DemoContainer components={["StaticDatePicker"]}>
    //           {/* <DemoItem label="Static variant"> */}
    //           <DemoItem>
    //             <StaticDatePicker
    //               defaultValue={dayjs()}
    //               orientation="portrait"
    //               onChange={handleDateSelect}
    //               renderInput={(params) => <Box {...params.inputProps} />}
    //             />
    //           </DemoItem>
    //         </DemoContainer>
    //       </LocalizationProvider>
    //       {/* <Typography variant="h6">
    //       Uncompleted Tasks for Selected Date:
    //     </Typography> */}
    //     </CardContent>
    //   </Card>
    //   <Box sx={{ padding: ".5rem 1rem" }}>
    //     {selectedDateTasks.map((task) => (
    //       <Box
    //         key={task.id}
    //         sx={{
    //           backgroundColor: "white",
    //           marginBottom: ".5rem",
    //           padding: ".5rem 1rem",
    //           textAlign: "center",
    //         }}
    //       >
    //         <Typography>{task.title}</Typography>
    //         <Typography>{task.description}</Typography>
    //       </Box>
    //     ))}
    //   </Box>
    // </div>
    <Box>
      <Stack sx={{ height: "100%", padding: ".5rem" }}>
        <Box>
          <Typography variant="h5">Completed Puja:</Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              paddingY: ".5rem",
            }}
          >
            {user.bookings ? (
              user?.bookings.map((item, index) => {
                if (item?.panditStatus == 5) {
                  return (
                    <CompletedCard key={index} details={item} user={user} />
                  );
                }
              })
            ) : (
              <Typography variant="h6">No Puja Available</Typography>
            )}
          </Box>
        </Box>
        <Box>
          <Typography variant="h5">Rejected Puja:</Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              paddingY: ".5rem",
            }}
          >
            {user.bookings ? (
              user.bookings.map((item, index) => {
                if (item?.panditStatus == 2) {
                  return (
                    <CompletedCard key={index} details={item} user={user} />
                  );
                }
              })
            ) : (
              <Typography variant="h6">No Puja Available</Typography>
            )}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
