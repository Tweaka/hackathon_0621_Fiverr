import Image from "next/image";
import add from "../public/images/add.svg";

interface IProps {
  setIsActive: any;
}

export default function PlusButton({ setIsActive }: IProps): JSX.Element {
  const handleClick = () => {
    setIsActive((previousState) => !previousState);
  };
  return (
    <div className="flex flex-col p-2 items-center justify-betweenp-2 text-gray-600 ">
      <button
        onClick={handleClick}
        className="flex items-center justify-center p-3 rounded-sm  border-2 border-gray-600 w-52 h-40 "
      >
        <div className="  ">
          <Image src={add} alt="" width={50} height={50} />
        </div>
      </button>
      <h2>Create new project</h2>
    </div>
  );
}
