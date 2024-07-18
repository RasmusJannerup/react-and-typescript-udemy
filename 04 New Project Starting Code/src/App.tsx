import { useRef } from "react";
import { Button } from "./components/Button";
import { Form } from "./components/Form";
import { Input } from "./components/Input";

function App() {

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string, age: number };
    console.log(extractedData);
    formRef.current?.clear();
  }

  const formRef = useRef<HTMLFormElement>();



  return <main>

    <Form
      onSave={handleSave}
      ref={formRef}
    >
      <Input
        label="Name"
        id="name"
        type="text"
        name="name"
      ></Input>
      <Input
        label="Age"
        id="age"
        type="number"
        name="age"
      ></Input>
      <p>
        <Button>
          Submit
        </Button>
      </p>
    </Form>
  </main>;
}

export default App;
