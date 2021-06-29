interface IProps {
  categories: any;
}

export default function SubBar({ categories }: IProps): JSX.Element {
  console.log(categories);
  return <div></div>;
}
