import Button from "../../../components/ui/button/Button";

const Dashboard = () => {
  return (
    <>
      <header className="dashboard-header">
        <div>
          <h1>Hello, John</h1>
          <p>Never put off tomorrow, what can be done today.</p>
        </div>
        <Button content="Add New Device" variant="blue"/>
      </header>
    </>
  );
};

export default Dashboard;
