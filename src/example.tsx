const Example = ({ message }: { message: string}) => {
 return (
  <div>
    <h1> Welcome to Bun.js with React 5</h1>
    <h2>Here is a message from the template creator</h2> 
    <p>{message}</p>
  </div>
 )
};

export {Example};