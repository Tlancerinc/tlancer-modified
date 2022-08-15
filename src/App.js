import PageNotFound from "./Components/PageNotFound";
import Home from "./pages/HomePage/Home";
import Navbar from "./pages/HomePage/Navbar";
import {Route, Routes} from "react-router-dom"
import { useContext } from "react";
import Login from "./Components/Login";
import ChooseAccount from "./pages/JoinPages/ChooseAccount";
import JoinDateOfBirth from "./pages/JoinPages/JoinDateOfBirth"
import JoinEmail from "./pages/JoinPages/JoinEmail";
import JoinName from "./pages/JoinPages/JoinName";
import JoinLocation from "./pages/JoinPages/JoinLocation";
import JoinPhoneNumber from "./pages/JoinPages/JoinPhoneNumber";
import JoinPassword from "./pages/JoinPages/JoinPassword";
import JoinDataSent from "./pages/JoinPages/JoinDataSent";
import VerifyEmail from "./pages/JoinPages/VerifyEmail";
import StudentPage from "./pages/ProfilePage/StudentPage/StudentPage";
import TutorPage from "./pages/ProfilePage/TutorPage/TutorPage";
import NewTutorHome from "./pages/ProfilePage/TutorPage/NewTutor/NewTutorHome";
import TutorNav from "./Components/TutorNav";
import TutorNewCourse from "./pages/ProfilePage/TutorPage/NewTutor/TutorNewCourse";
import TutorNewCourseSyllabus from "./pages/ProfilePage/TutorPage/NewTutor/TutorNewCourseSyllabus";
import TutorNewCoursePreviewVideo from "./pages/ProfilePage/TutorPage/NewTutor/TutorNewCoursePreviewVideo";
import NewTutorCourseCalendar from "./pages/ProfilePage/TutorPage/NewTutor/NewTutorCourseCalendar";
import TutorNewCoursePricing from "./pages/ProfilePage/TutorPage/NewTutor/TutorNewCoursePricing";
import ParentNav from "./Components/ParentNav"
import ParentPage from "./pages/ProfilePage/ParentPage/ParentPage"
import ParentLoggedPage from "./pages/ProfilePage/ParentPage/ParentLoggedPage";
import Footer from "./pages/HomePage/Footer";
import AuthContext from "./store/auth-context";


const App = (props) => {
  const AuthCTX = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home/>
            </>
          }
        />

        {!AuthCTX.isLoggedIn && (
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        )}

        <Route
          path="/account"
          element={
            <>
              <ChooseAccount />
            </>
          }
        />

        {!AuthCTX.isLoggedIn && (
          <Route
            path="/join"
            element={
              <>
                <JoinEmail />
              </>
            }
          />
        )}

        <Route
          path="/names"
          element={
            <>
              <JoinName />
            </>
          }
        />

        <Route
          path="/date-of-birth"
          element={
            <>
              <JoinDateOfBirth />
            </>
          }
        />

        <Route
          path="/location"
          element={
            <>
              <JoinLocation />
            </>
          }
        />

        <Route
          path="/phone-number"
          element={
            <>
              <JoinPhoneNumber />
            </>
          }
        />

        <Route
          path="/password"
          element={
            <>
              <JoinPassword />
            </>
          }
        />

        <Route
          path="/success"
          element={
            <>
              <JoinDataSent />
            </>
          }
        />

        <Route
          path="/verify-account"
          element={
            <>
              <VerifyEmail />
            </>
          }
        />

        <Route
          path="/student"
          element={
            <>
              <StudentPage />
            </>
          }
        />

        <Route
          path="/tutor"
          element={
            <>
              <TutorPage />
            </>
          }
        />

        <Route
          path="/parent"
          element={
            <>
              <ParentPage />
            </>
          }
        />

        <Route
          path="/tutor/new-tutor"
          element={
            <>
              <NewTutorHome />
            </>
          }
        />

        <Route
          path="/tutor/course-details"
          element={
            <>
              <TutorNav />
              <TutorNewCourse />
            </>
          }
        />

        <Route path="/tutor/course-syllabus" element={ <><TutorNav /><TutorNewCourseSyllabus /></> }/>
        <Route path="/tutor/course-preview-video" element={ <><TutorNav /><TutorNewCoursePreviewVideo /></> } />
        <Route path="/tutor/course-calendar" element={ <><TutorNav /><NewTutorCourseCalendar /></> } />
        <Route path="/tutor/course-pricing" element={ <><TutorNav /><TutorNewCoursePricing /></> } />
        <Route path="/parent/parent-logged-in" element={ <><ParentNav /><ParentLoggedPage /> </> } />
        <Route path="*" element={ <><Navbar /><PageNotFound /> </> } />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
