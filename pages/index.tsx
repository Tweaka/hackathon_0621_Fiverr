import { gql } from "@apollo/client";
import client from "../apolloClient";
import { GetStaticProps } from "next";

interface IProps {
  projects: any;
  categories: any;
  levels: any;
}

function Home({ projects, categories, levels }: IProps): JSX.Element {
  return (
    <div className="bg-gray-100 px-28">
      <div className="flex items-center">
        <div className="w-1/4 h-40 border m-2 bg-white flex items-center justify-between">
          <span className="m-2 bg-Fiverr px-2 text-white text-7xl font-bold rounded-full w-24 h-24 border border-gray-400 flex items-center justify-center">
            <button className="">T</button>
          </span>
          <ul className="text-blue-700 font-bold text-md mr-2">
            <li>View My Favorites</li>
            <li className="py-2">Invite Friends</li>
            <li>Start Selling</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="flex ">
            <ul className="flex border-b-2 text-gray-600 w-full mb-3">
              <li className="mx-2 ">
                <button className="font-bold"> CURRENT PROJECTS </button>
              </li>
              <li className="mx-2">TO-DOS</li>
              <li className="mx-2">NOTIFICATIONS</li>
            </ul>
          </div>
          <div className="bg-white"> coucou je suis un projet </div>
        </div>
      </div>
      <div>
        <pre>{JSON.stringify(categories, null, 2)}</pre>
      </div>
      <div>
        <pre>{JSON.stringify(levels, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Home;

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
