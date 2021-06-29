import Image from "next/image";
import plus from "../public/images/plus.svg";

export default function PlusButton(): JSX.Element {
  return (
    <div className="flex items-center justify-between border-b-2 p-2">
      <button className="bg-Fiverr text-white p-1 px-3 font-bold rounded-sm mr-20">
        <Image src={plus} alt="" width={50} height={50} />
      </button>
    </div>
  );
}
