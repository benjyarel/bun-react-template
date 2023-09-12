export interface ExampleProps {
  message: string;
}

export const Example = ({ message }: ExampleProps) => {
  return (
    <div>
      <h1> Welcome to Bun.js with React</h1>
      <p>{message}</p>
    </div>
  );
};
