interface IProps {
  category: [];
}

export default function SubBar({ category }: IProps): JSX.Element {
  return (
    <div className="flex items-center justify-between border-b-2 p-2">
      <div className="text-gray-600 ml-20">
        <ul className="flex">
          <li className="mx-2">Dashboard</li>
          <li className="mx-2">Contacts</li>
          <li className="mx-2">Inbox</li>
          <li className="mx-2">Settings</li>
          <li>
            <button>Projects</button>
          </li>
        </ul>
      </div>
      <button className="bg-Fiverr text-white p-1 font-bold rounded-sm mr-20">
        Start Selling
      </button>
    </div>
  );
}