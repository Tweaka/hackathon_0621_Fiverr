import PlusButton from "../components/plusButton";
import FormProject from "./formProject";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import OneProject from "./oneProject";

interface IProps {
  projects: any;
}

export default function Card({ projects }: IProps): JSX.Element {
  const [isActive, setIsActive] = useState(true);
  const [isOneProject, setIsOneProject] = useState(true);
  const [projectId, setProjectId] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return (
    <div>
      {isOneProject ? (
        isActive ? (
          <div className="flex flex-wrap justify-center ">
            <PlusButton setIsActive={setIsActive} />
            {projects.map((project, index) => {
              const handleClick = () => {
                setIsOneProject((previousState) => !previousState);
                setProjectId(project.id - 1);
                console.log(project.id);
              };

              return (
                <div className="p-2 w-52" key={index}>
                  <button type="button" onClick={handleClick}>
                    <img
                      src={project.image}
                      alt="project picture"
                      className="w-52 h-40 rounded-sm"
                    ></img>
                  </button>
                  <h2 className="text-center">{project.name}</h2>
                  <h2 className="text-center text-xs">{project.description}</h2>
                </div>
              );
            })}
          </div>
        ) : (
          <FormProject setIsActive={setIsActive} />
        )
      ) : (
        <OneProject
          projects={projects}
          projectId={projectId}
          setIsOneProject={setIsOneProject}
        />
      )}
    </div>
  );
}
