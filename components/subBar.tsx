interface IProps {
  category: [];
}

export default function SubBar({ category }: IProps): JSX.Element {
  return (
    <ul>
      {category.map((category, index) => {
        <li key={index}>{category["name"]}</li>; //fixed type never with ["name"] instead of .name
      })}
    </ul>
  );
}
