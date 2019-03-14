import Card from "./Card";

const App = () => {
  return (
    <div>
      <h1>Card Component</h1>
      <Card
        image="https://via.placeholder.com/300"
        title="Card Title"
        description="This is a description of the card."
      />
    </div>
  );
};

export default App;
