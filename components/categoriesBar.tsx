import Link from "next/link";
import PlusButton from "./plusButton";

interface IProps {
  category: any;
}

export default function CategoriesBar({ category }: IProps): JSX.Element {
  return (
    <div className="flex items-center justify-between border-b-2 p-2 ">
      <div className="flex text-gray-600 ml-10">
        <div className="w-full">
          <h2 className="font-bold">Categories </h2>
          {category.map((category, index) => {
            return (
              <ul key={index}>
                <li className="my-4">{category.name}</li>
              </ul>
            );
          })}
          <div>
            <Link href="/">
              <a className="font-bold text-blue-900">Archived Projects</a>
            </Link>
          </div>
        </div>
        <div>
          <PlusButton />
        </div>
      </div>
    </div>
  );
}
