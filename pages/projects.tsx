import { gql } from "@apollo/client";
import client from "../apolloClient";
import { GetStaticProps } from "next";
import React from "react";
import CategoriesBar from "../components/categoriesBar";
import Card from "../components/projectCard";

interface IProps {
  projects: any;
  categories: any;
  levels: any;
}
export default function Projects({
  projects,
  levels,
  categories,
}: IProps): JSX.Element {
  return (
    <div className="bg-gray-100 flex">
      <div className="w-1/4">
        <CategoriesBar categories={categories} />
      </div>
      <div className="w-3/4">
        <Card categories={categories} projects={projects} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (_context) => {
  const { data } = await client.query({
    query: gql`
      query GET_ALL_DATA {
        category {
          id
          name
        }
        level {
          id
          type
        }
        project {
          delivery_time
          id
          member_nbr
          name
          image
          description
        }
        user {
          category_id
          comment
          id
          level_id
          rating
        }
      }
    `,
  });
  console.log(data);
  return {
    props: {
      categories: data.category,
      levels: data.level,
      projects: data.project,
    },
  };
};
