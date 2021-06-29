export default function Card({ projects }) {
  return projects.map((project, index) => {
    return (
      <div className="flex flex-wrap ">
        <img className="rounded-tr-sm w-60 h-52" src={project.image}></img>
        <h1> {project.name} </h1>
      </div>
    );
  });
}
