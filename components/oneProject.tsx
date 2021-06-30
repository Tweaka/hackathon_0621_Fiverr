import { useRouter } from "next/dist/client/router";

export default function OneProject({ projects, projectId }) {
  console.log(projectId);
  const router = useRouter();
  const { id } = router.query;
  return <div>c'est notre projet : {projects[projectId].name} </div>;
}
