import { Part } from "./Part.jsx";

export const Content = ({ part1, part2, part3, ex1, ex2, ex3 }) => {
  return (
    <>
      <Part part = {part1} exercici={ex1} />
      <Part part = {part2} exercici={ex2} />
      <Part part = {part3} exercici={ex3} />
    </>
  );
};
