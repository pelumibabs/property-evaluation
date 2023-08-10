import React, { useState } from 'react';

interface FormData {
  bedrooms: string;
  bathrooms: string;
  floors: string;
  yr_built: string;
  property_type: string;
  building_type: string;
}

interface FormComponentProps {
  onSubmit: (formData: FormData) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    bedrooms: '',
    bathrooms: '',
    floors: '',
    yr_built: '',
    property_type: '',
    building_type: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };  

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="property_type">
            Property Type
          </label>
          <select
            id="property_type"
            name="property_type"
            className="w-full px-3 py-2 border rounded"
            value={formData.property_type}
            onChange={handleInputChange}
          >
            <option value="">Select an option</option>
            <option value="option1">Residential</option>
            <option value="option2">Commercial</option>
            <option value="option3">Industrial</option>
            <option value="option4">Storage</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="building_type">
            Building Type
          </label>
          <select
            id="building_type"
            name="building_type"
            className="w-full px-3 py-2 border rounded"
            value={formData.building_type}
            onChange={handleInputChange}
          >
            <option value="">Select an option</option>
            <option value="option1">Bungalow</option>
            <option value="option2">Storey</option>
            <option value="option3">Semi-Detached</option>
            <option value="option4">Duplex</option>
            <option value="option5">Terrace</option>
            <option value="option6">Apartment</option>
            <option value="option7">Flats</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="bedrooms">
            No. of Bedrooms
          </label>
          <input
            type="text"
            id="bedrooms"
            name="bedrooms"
            className="w-full px-3 py-2 border rounded"
            placeholder="Bedrooms"
            value={formData.bedrooms}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="bathrooms">
            No. of Bathrooms
          </label>
          <input
            type="text"
            id="bathrooms"
            name="bathrooms"
            className="w-full px-3 py-2 border rounded"
            placeholder="Bathrooms"
            value={formData.bathrooms}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="floors">
            No. of Floors
          </label>
          <input
            type="text"
            id="floors"
            name="floors"
            className="w-full px-3 py-2 border rounded"
            placeholder="Floors"
            value={formData.floors}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="yr_built">
            Year Built
          </label>
          <input
            type="text"
            id="yr_built"
            name="yr_built"
            className="w-full px-3 py-2 border rounded"
            placeholder="Year Built"
            value={formData.yr_built}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="px-4 py-2 bg-black hover:bg-gray-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
