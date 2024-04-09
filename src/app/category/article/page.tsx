"use client";

import React from "react";

import NavBar from "@/components/navbar/NavBar";
import Article from "@/components/article/Article";
import Footer from "@/components/footer/Footer";

export default function Category() {
  return (
    <>
      <NavBar />
      <main>
        <Article />
        <Footer />
      </main>
    </>
  );
}
