export default function Course() {
  const course = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <>
      <h2>My Course List</h2>
      <ul>
        {course.map((course, index) => {
          return (
            <li key={index} onClick={() => alert(index)}>
              {course}
            </li>
          );
        })}
      </ul>
    </>
  );
}
