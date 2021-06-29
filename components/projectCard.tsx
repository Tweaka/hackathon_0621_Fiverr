import Link from "next/link";
import PlusButton from "../components/plusButton";
import FormProject from "./formProject";
import { useState } from "react";

interface IProps {
  projects: any;
}

export default function Card({ projects }: IProps): JSX.Element {
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      {isActive ? (
        <div className="flex flex-wrap justify-center ">
          <PlusButton setIsActive={setIsActive} />
          {projects.map((project, index) => {
            return (
              <div className="p-2 w-52" key={index}>
                <Link href="">
                  <a>
                    <img
                      src={project.image}
                      alt="project picture"
                      className="w-52 h-40 rounded-sm"
                    ></img>
                  </a>
                </Link>
                <h2 className="text-center">{project.name}</h2>
                <h2 className="text-center text-xs">{project.description}</h2>
              </div>
            );
          })}
        </div>
      ) : (
        <FormProject />
      )}
    </div>
  );
}
