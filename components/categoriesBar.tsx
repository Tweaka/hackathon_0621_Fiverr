import Link from "next/link";

interface IProps {
  categories: any;
}

export default function CategoriesBar({ categories }: IProps): JSX.Element {
  return (
    <div className="flex items-center justify-between p-2 border-r-2">
      <div className="flex text-gray-600 ml-10">
        <div className="w-full">
          <h2 className="font-bold">Categories </h2>
          {categories.map((category, index) => {
            return (
              <ul key={index}>
                <li className="my-4">{category.name}</li>
              </ul>
            );
          })}
          <div>
            <Link href="/archive">
              <a className="font-bold text-blue-900">Archived Projects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
