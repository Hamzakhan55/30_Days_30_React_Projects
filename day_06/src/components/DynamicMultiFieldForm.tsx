import { useState } from "react";

const formSchema = [
    {
        label: "Name",
        name: "name",
        type: "text",
        placeholder: "Enter your name",
        required: true
    },
    {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "Enter your Email",
        required: true
    },
    {
        label: "Age",
        name: "age",
        type: "number",
        placeholder: "Enter your Age",
        required: false
    },
    {
       label: "Phone Number",
        name: "phonenumber",
        type: "number",
        placeholder: "Enter your Phone Number",
        required: false  
    },
    {
       label: "Address",
        name: "Address",
        type: "text",
        placeholder: "Enter your Address",
        required: false  
    }
]

const initialStateObject = {
    name: '',
    email: '',
    age: '',
    phonenumber: ''
}

type FormData = {
    [key: string]: string;
}

function DynamicMultiFieldForm(){
    const [formData, setFormData] = useState<FormData>(initialStateObject);
    const [submittedData, setSubmittedData] = useState<FormData | null>(null);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return(
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Dynamic Form</h2>
            {formSchema.map((item) => 
            <div key={item.name} className="space-y-2">
                <label htmlFor={item.name} className="block text-sm font-medium text-gray-700">
                    {item.label}
                </label>
                <input
                    id={item.name}
                    name={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                    required={item.required}
                    value={formData[item.name] || ''}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            )}
            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors font-medium">Submit</button>
        </form>
        
        {submittedData && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Submitted Data</h3>
                <pre className="bg-white p-3 rounded-md text-sm overflow-x-auto border">
                    {JSON.stringify(submittedData, null, 2)}
                </pre>
            </div>
        )}
        </div>
    )
}

export default DynamicMultiFieldForm;