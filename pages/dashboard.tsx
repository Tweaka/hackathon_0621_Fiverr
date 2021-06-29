import React from "react";
import Navbar from "../components/navbar/navbar";
import SubBar from "../components/subBar";
import CategoriesBar from "../components/categoriesBar";
import PlusButton from "../components/plusButton";
import Card from "../components/projectCard";

interface IProps {
  projects: any;
  categories: any;
  levels: any;
}
export default function Dashboard({
  projects,
  levels,
  categories,
}: IProps): JSX.Element {
  return (
    <div>
      <Navbar />
      <SubBar />
      <div className="bg-gray-100">
        <CategoriesBar categories={categories} />
        <PlusButton />
        <Card categories={categories} projects={projects} />
      </div>
    </div>
  );
}
