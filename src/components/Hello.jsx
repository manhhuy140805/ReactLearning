export default function Hello(props) {
  const { name, content } = props;
  return (
    <>
      <h2>
        Hello from the Hello component, {name}! {content}
      </h2>
    </>
  );
}
