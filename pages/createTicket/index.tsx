import React, { useState } from "react";
import { MainLayout } from "@/components/templates/MainLayout";
import FormComponent from "@/components/forms/form";
import Modal from "@/components/forms/modal";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [result, setResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  
  interface FormData {
    bedrooms: string;
    bathrooms: string;
    yr_built: string;
    floors: string;
  }

  const handleFormSubmit = async (formData: FormData) => {
    try {
      const response = await fetch("http://127.0.0.1:4999/predict", {
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
      setIsModalOpen(true); 
    } catch (error) {
      console.error("Error:", error);
      setResult(null);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <MainLayout>
      <div>Create a ticket</div>
      <section className="p-8">
        <FormComponent onSubmit={handleFormSubmit} />
      </section>
      
      <Modal isOpen={isModalOpen} onClose={closeModal} data={result} />
    </MainLayout>
  );
}
