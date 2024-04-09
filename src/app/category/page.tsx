"use client";

import React, { useState } from "react";

import Image from "next/image";

import NavBar from "@/components/navbar/NavBar";
import CategoryView from "@/components/categoryView/CategoryView";
import Footer from "@/components/footer/Footer";

export default function Category() {
  return (
    <>
      <NavBar />
      <main>
        <CategoryView />
        <Footer />
      </main>
    </>
  );
}
