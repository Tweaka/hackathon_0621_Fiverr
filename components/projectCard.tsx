import Link from "next/link";

interface IProps {
  projects: any;
  categories: any;
}

export default function Card({ projects, categories }: IProps): JSX.Element {
  return (
    <div className="flex flex-wrap justify-center ">
      {projects.map((project, index) => {
        return (
          <div className="p-2" key={index}>
            <Link href="">
              <a>
                <img
                  src={project.image}
                  alt="project picture"
                  className="w-52 h-40 rounded-sm"
                ></img>
              </a>
            </Link>
            <h2>{project.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
