import React, { useState } from "react";
import { MainLayout } from "@/components/templates/MainLayout";
import FormComponent from "@/components/forms/form";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [result, setResult] = useState(null);

  interface FormData {
    bedrooms: string;
    bathrooms: string;
    yr_built: string;
    floors: string;
  }

  const handleFormSubmit = async (formData: FormData) => {
    try {
      const response = await fetch("https://property-eval.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setResult(null);
    }
  };

  return (
    <MainLayout>
      <div>Create a ticket</div>
      <section className="p-8">
        <FormComponent onSubmit={handleFormSubmit} />
        {result && (
          <div className="mt-4">
            Result: <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </section>
    </MainLayout>
  );
}
