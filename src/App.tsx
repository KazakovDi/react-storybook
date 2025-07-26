import { useState } from "react";
import { Input } from "./components/Input/Input";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { ToastContainer } from "./components/Toast/ToastContainer";
import { toast } from "./components/Toast/toast";
import { twoLevelItems } from "./shared/constants";

function App() {
  const handleSuccess = () => {
    toast.success("Success!", "Your action was completed successfully");
  };

  const handleWarning = () => {
    toast.warning("Warning!", "Please check", { duration: 3000 });
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Input type="password" clearable />

      <button onClick={handleSuccess}>Show Primary Toast</button>
      <button onClick={handleWarning}>Show Warning Toast</button>

      <ToastContainer />
      <button onClick={() => setIsOpen(true)}>open</button>
      <Sidebar
        onClose={() => {
          setIsOpen(false);
        }}
        isOpen={isOpen}
        items={twoLevelItems}
      />
    </div>
  );
}

export default App;
