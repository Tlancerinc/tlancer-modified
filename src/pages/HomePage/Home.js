import Navbar from "./Navbar";
import Hero from "./Hero";
import PopularCourses from "./PopularCourses/PopularCourses";
import Divider from "./Divider";
import ExploreCourses from "../../Components/ExploreCourses/ExploreCourses/ExploreCourses";
import Tutors from "./Tutors";
import Tips from "./Tips/Tips";
import Testimonies from "./Testimonies";
import Newsletter from "./Newsletter";
import FooterLinks from "./FooterLinks";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Login from "../../Components/Login";
import ChooseAccount from "../../pages/JoinPages/ChooseAccount";
import JoinEmail from "../../pages/JoinPages/JoinEmail";
import JoinName from "../../pages/JoinPages/JoinName";
import JoinDateOfBirth from "../../pages/JoinPages/JoinDateOfBirth";
import JoinLocation from "../../pages/JoinPages/JoinLocation";
import JoinPhoneNumber from "../../pages/JoinPages/JoinPhoneNumber";
import JoinPassword from "../JoinPages/JoinPassword";
import VerifyEmail from "../JoinPages/VerifyEmail";
import JoinDataSent from "../JoinPages/JoinDataSent";
import StudentPage from "../ProfilePage/StudentPage/StudentPage";
import TutorPage from "../ProfilePage/TutorPage/TutorPage";
import ParentPage from "../ProfilePage/ParentPage/ParentPage";
import AuthContext from "../../store/auth-context";
import NewTutorHome from "../ProfilePage/TutorPage/NewTutor/NewTutorHome";
import TutorNav from "../../Components/TutorNav";
import TutorNewCourse from "../ProfilePage/TutorPage/NewTutor/TutorNewCourse";
import TutorNewCourseSyllabus from "../ProfilePage/TutorPage/NewTutor/TutorNewCourseSyllabus";
import { useContext } from "react";
import PageNotFound from "../../Components/PageNotFound";
import ParentLoggedPage from "../ProfilePage/ParentPage/ParentLoggedPage";
import ParentNav from "../../Components/ParentNav";
import TutorNewCoursePreviewVideo from "../ProfilePage/TutorPage/NewTutor/TutorNewCoursePreviewVideo";
import TutorNewCoursePricing from "../ProfilePage/TutorPage/NewTutor/TutorNewCoursePricing";
import NewTutorCourseCalendar from "../ProfilePage/TutorPage/NewTutor/NewTutorCourseCalendar";

const Home = () => {
  console.log("home rendered");
  const AuthCTX = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Divider />
              <PopularCourses />
              <Divider />
              <ExploreCourses />
              <Tutors />
              <Divider />
              <Testimonies />
              <Divider />
              <Tips />
              <Divider />
              <Newsletter />
              <Divider />
              <FooterLinks />
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

        <Route
          path="/tutor/course-syllabus"
          element={
            <>
              <TutorNav />
              <TutorNewCourseSyllabus />
            </>
          }
        />

        <Route
          path="/tutor/course-preview-video"
          element={
            <>
              <TutorNav />
              <TutorNewCoursePreviewVideo />
            </>
          }
        />

        <Route
          path="/tutor/course-calendar"
          element={
            <>
              <TutorNav />
              <NewTutorCourseCalendar />
            </>
          }
        />

        <Route
          path="/tutor/course-pricing"
          element={
            <>
              <TutorNav />
              <TutorNewCoursePricing />
            </>
          }
        />

        <Route
          path="/parent/parent-logged-in"
          element={
            <>
              <ParentNav />
              <ParentLoggedPage />
            </>
          }
        />

        <Route
          path="*"
          element={
            <>
              <Navbar />
              <PageNotFound />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default Home;
