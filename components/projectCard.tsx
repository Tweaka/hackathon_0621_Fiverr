import Link from "next/link";
import PlusButton from "../components/plusButton";

interface IProps {
  projects: any;
  categories: any;
}

export default function Card({ projects, categories }: IProps): JSX.Element {
  return (
    <div className="flex flex-wrap justify-center ">
      <PlusButton />
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
  );
}
