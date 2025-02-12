"use client"; 
import { Suspense } from "react";
import React from "react";
import { DashboardContent } from "./DashboardContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
