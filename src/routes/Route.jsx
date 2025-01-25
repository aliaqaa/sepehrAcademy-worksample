import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Landing from "../pages/landing/Landing";
import DefualtLayout from "../components/layouts/DefualtLayout";
import NotFound from "../pages/NotFound/NotFound";
import CoursesList from "../pages/CoursesList/CoursesList";
import CoursePage from "../pages/CoursePage/CoursePage";
import News from "../pages/News/News";
import NewsPage from "../components/News/NewsPage/NewsPage";
import AuthLayout from "../components/layouts/AuthLayout";
import Auth from "../components/Auth/Auth";

const RoutesApp = () => (
  <Router>
    <Routes>
      <Route element={<DefualtLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<CoursesList />} />
        <Route path="/courses/:id" element={<CoursePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/auth" element={<Auth />} />
      </Route>
    </Routes>
  </Router>
);

export default RoutesApp;
