"use client";

import React, { useState } from "react";

import { School } from "@/types/school";
import { SchoolSearch } from "@/components/auth/school-search";
import { TeacherLogin } from "@/components/auth/teacher-login";

type ViewState = "search" | "login" | "forgot-password";

export default function LoginPage() {
  const [currentView, setCurrentView] = useState<ViewState>("search");
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);

  const handleSchoolSelect = (school: School) => {
    setSelectedSchool(school);
    setCurrentView("login");
  };

  const handleBackToSearch = () => {
    setSelectedSchool(null);
    setCurrentView("search");
  };

  return (
    <>
      {currentView === "search" && (
        <SchoolSearch onSchoolSelect={handleSchoolSelect} />
      )}

      {currentView === "login" && selectedSchool && (
        <TeacherLogin
          school={selectedSchool}
          handleBackToSearch={handleBackToSearch}
        />
      )}
    </>
  );
}
