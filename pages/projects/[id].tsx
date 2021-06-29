import { useRouter } from "next/dist/client/router";

export default function Project() {
  const router = useRouter();
  const { id } = router.query;
  return <div>c'est le projet :{id}</div>;
}
