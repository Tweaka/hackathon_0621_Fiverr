import { useRouter } from "next/dist/client/router";
import Image from "next/image";

export default function OneProject({ projects, projectId }) {
  console.log(projectId);
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <div className="flex items-center justify-center m-4">
        <h2 className="font-bold">Project Name : </h2>
        <p>{projects[projectId].name}</p>
      </div>
      <div className="flex">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={projects[projectId].image}
            alt="image"
            width={300}
            height={300}
          ></img>
        </div>
        <div className="w-1/2 m-4">
          <div>
            <h2 className="font-bold">Deadline :</h2>
            <p>{projects[projectId].delivery_time}</p>
          </div>
          <div>
            <h2 className="font-bold">Number of participants : </h2>
            <p>{projects[projectId].member_nbr}</p>
          </div>
          <div>
            <h2 className="font-bold">Project Description :</h2>
            <p>{projects[projectId].description}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="m-2 bg-Fiverr px-3 py-1 text-white rounded-sm max-w-full font-bold h-8">
          Join
        </button>
      </div>
    </div>
  );
}
