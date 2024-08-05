import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import Dashboard from "./pages/dashboard/Dashboard";
import Vendor from "./pages/vendoe/Vendor";
import AboutUs from "./pages/aboutUs/AboutUs";
import RegisterLogin from "./components/UI/registerLogin/RegisterLogin";
import { closeContext } from "./closeContext/closeContext";
import { CSSProperties } from "react";
import { RingLoader } from "react-spinners/RingLoader";
import Spinner from "./components/UI/Spinner/Spinner";
import Footer from "./layout/footer";
import PanditView from "./pages/panditView/PanditView";
import CartPage from "./pages/cartPage/CartPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Course from "./pages/course/Course";
import CoursePageDetails from "./pages/coursePageDetails/CoursePageDetails";
import FullPage from "./layout/fullPage/FullPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser } from "./Redux/userSlice";
import PujaType from "./pages/pujaType/PujaType";
import Course from "./pages/course/Course";
import PujaOffering from "./pages/pujaOffering/PujaOffering";
import PujaDetails from "./pages/pujaDetails/PujaDetails";
import SearchPandit from "./pages/searchPandit/SearchPandit";
import SelectVendor from "./pages/selecrVendor/SelectVendor";
import NotFound from "./pages/notFound/NotFound";
import CheckOut from "./pages/checkout/CheckOut";
import LearnPage from "./pages/learnPage/LearnPage";
// export const theme = createTheme({
//   palette: {
//     secondary: {
//       main: "#ff4081", // or any other secondary color
//       dark: "#c51162", // the dark variant of the secondary color
//     },
//   },
// });

function App() {
  // hook ===============================
  const closeContexts = useContext(closeContext);
  const user = useSelector((i) => i.user);
  const dispatch = useDispatch();

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const [primaryColor, setPrimaryColor] = useState("#1976d2"); // Initial primary color

  // Function to create theme dynamically based on primaryColor ===================
  const getColor = useSelector((i) => i.themeColor);
  console.log(getColor);
  const theme = createTheme({
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: getColor,
      },
    },
  });

  // for frtching user =====================================
  const fetchUser = async () => {
    const User = JSON.parse(window.sessionStorage.getItem("user"));

    if (User) {
      const res = await axios.get(`http://localhost:8000/posts/${User.id}`);
      dispatch(addUser(res.data));
    }
  };
  useEffect(() => {
    fetchUser();
    const timer = setTimeout(() => {
      setLoading(false);
    }, [1000]);
    return () => clearTimeout(timer);
  }, []);

  // axios.post("http://localhost:8000/posts", {

  //   name: "riju",
  //   age: 28
  // })
  // const data = axios.get("http://localhost:8000/posts").then((data) => console.log(data.data));

  // for updatating user =============================================================
  const updadteUserFn = async (value) => {
    await axios.put(`http://localhost:8000/posts/${user.id}`, {
      ...value,
    });

    fetchUser();
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <FullPage>
              {/* <Dashboard /> */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/dashboard"
                  element={
                    <Dashboard
                      updadteUserFn={updadteUserFn}
                      fetchUser={fetchUser}
                    ></Dashboard>
                  }
                />
                <Route path="learn/:id" element={<LearnPage />} />

                <Route path="/pandit/:id" element={<PanditView />} />
                <Route path="/pujaOffering" element={<PujaOffering />} />
                {/* <Route path="/pujaType" element={<PujaType />} /> */}
                <Route path="/pujaDetails/:id" element={<PujaDetails />} />

                <Route path="/vendor" element={<Vendor />} />

                <Route path="/aboutUs" element={<AboutUs />} />
                <Route
                  path="/checkOut"
                  element={<CheckOut updadteUserFn={updadteUserFn} />}
                />

                <Route path="/searchPandit/" element={<SearchPandit />} />
                <Route path="/searchPandit/:id" element={<SearchPandit />} />

                <Route path="/cart" element={<CartPage />} />
                <Route path="course" element={<Course />}>
                  <Route path="courseDetails" element={<CoursePageDetails />} />
                </Route>
                <Route path="selectVendor" element={<SelectVendor />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
              <RegisterLogin fetchUser={fetchUser} />
              {/* {closeContexts.closeLogin || (
                <RegisterLogin fetchUser={fetchUser} />
              )} */}
              {/* <Footer /> */}
            </FullPage>
          </>
        )}
      </ThemeProvider>
    </div>
  );
}
export default App;
