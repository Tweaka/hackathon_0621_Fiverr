import Image from "next/image";
import add from "../public/images/add.svg";

export default function PlusButton(): JSX.Element {
  return (
    <div className="flex items-center justify-betweenp-2">
      <button className="flex items-center justify-between text-white p-3 rounded-sm  border-2 border-gray-600 ">
        <Image src={add} alt="" width={50} height={50} />
      </button>
    </div>
  );
}
