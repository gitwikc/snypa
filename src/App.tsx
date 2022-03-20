import CodeEditor from "./components/CodeEditor";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <CodeEditor />
      </main>
    </div>
  );
};

export default App;
