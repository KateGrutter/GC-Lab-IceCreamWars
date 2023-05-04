import './PageHeader.css';
export function PageHeader(prop: {user: string}) {
  return (
    <div>
      <header>Ice Cream Wars</header>
      <p>Welcome {prop.user}</p>
    </div>
  );
}
