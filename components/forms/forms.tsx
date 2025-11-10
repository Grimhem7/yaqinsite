"use client";
import React, { useState } from "react";
import styles from "./Form.module.css";

export default function Form() {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedOption2, setSelectedOption2] = useState<string>("");
  const [selectedOption3, setSelectedOption3] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    number: "",
  });
  const [popup, setPopup] = useState({ show: false, message: "", color: "" });

  // ✅ Ajoute un état pour le contrôle visuel
  const [validation, setValidation] = useState({
    name: "",
    number: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Vérifie chaque champ individuellement
    const nameValid = form.name.trim() !== "";
    const numberValid = form.number.trim() !== "";

    setValidation({
      name: nameValid ? "valid" : "invalid",
      number: numberValid ? "valid" : "invalid",
    });

    // Si les deux sont vides
    if (!nameValid || !numberValid) {
      setPopup({
        show: true,
        message: "⚠️ Please fill all fields before sending.",
        color: "bg-orange-500",
      });
      setTimeout(() => setPopup({ show: false, message: "", color: "" }), 3000);
      return;
    }
    // ✅ Si tout est bon
    setPopup({
      show: true,
      message: "✅ Information sent successfully!",
      color: "bg-green-500",
    });
    setTimeout(() => setPopup({ show: false, message: "", color: "" }), 3000);

    // Réinitialiser le form
    setForm({ name: "", number: "" });
    setValidation({ name: "", number: "" });
  };




  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption2(event.target.value);
  };
  const handleOptionChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption3(event.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.formGroup}>
        <input
          type="text"
          id="name"
          name="name"
          className={`${styles.formInput} ${
            validation.name === "valid"
              ? "border-green-500"
              : validation.name === "invalid"
              ? "border-orange-500"
              : ""
          }`}
          placeholder=" "
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="name" className={styles.formLabel}>
          Full Name
        </label>
      </div>
      <div className="flex w-full flex-col items-start justify-start ">
        <div className="flex w-full flex-1 flex-row items-stretch justify-start ">
          <input
            placeholder=""
            name="fullname"
            type="text"
            className="flex h-10 rounded-lg border border-gray-800 bg-transparent px-3 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
          />
        </div>
      </div>
    <div className="">
      <div className={styles.formGroup}>
         <input
          type="number"
          id="number"
          name="number"
          className={`${styles.formInput} ${
            validation.number === "valid"
              ? "border-green-500"
              : validation.number === "invalid"
              ? "border-orange-500"
              : ""
          }`}
          placeholder=" "
          value={form.number}
          onChange={handleChange}
        />
      <label htmlFor="number" className={styles.formLabel}>
          Number
        </label>
      </div>
      </div>
      <div className="space-y-2 flex w-full flex-col items-start justify-start gap-2">
        <div className="flex w-full flex-1 flex-row items-stretch justify-start gap-2">
          <input
            placeholder=""
            name="Telephone"
            type="text"
            className="flex h-10 rounded-lg border border-gray-800 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
          />
        </div>
      </div>

      
      
      <div className="space-y-2 flex w-full flex-col items-start justify-start gap-2 mt-[15px] ">
        <label
          htmlFor=""
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          What is your budget range ?
        </label>
        <div
          className="w-full grid lg:grid-cols-2 grid-cols-1 gap-2 lg:gap-8 gap-x-12"
          role="radiogroup"
        >
          <div className="flex items-center space-x-3 space-y-0">
            <label className="w-full cursor-pointer bg-transparent px-4 py-2 border rounded-lg border-gray-800 flex items-center gap-4">
              <input
                className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              <div className="text-[#9ca3af] text-[0.9rem]">Consulting</div>
            </label>
          </div>
          <div className="flex items-center space-x-3 space-y-0">
            <label className="w-full cursor-pointer bg-transparent px-4 py-2 border rounded-lg border-gray-800 flex items-center gap-4">
              <input
                className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              <div className="text-[#9ca3af] text-[0.9rem]">Coaching</div>
            </label>
          </div>
        </div>
      </div>
      <div className="space-y-2 flex w-full flex-col items-start justify-start gap-2">
        <label htmlFor="" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      What is your budget range?
        </label>
        <div className="gap-2 w-full flex flex-col space-y-1" role="radiogroup">
          <div className="flex items-center space-x-3 space-y-0">
            <label className="w-full cursor-pointer bg-transparent px-4 py-2 border rounded-lg border-gray-800 flex items-center gap-4">
              <input
                className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="radio"
                value="option1"
                checked={selectedOption3 === "option1"}
                onChange={handleOptionChange3}
              />
              <div className="text-right text-[#9ca3af] text-[0.9rem]">
                <span> From </span>
                {/* Pas d'espace ici */}
                <span dir="ltr">1K$</span> {/* Pas d'espace ici */}
                To {/* Pas d'espace ici */}
                <span dir="ltr"> 2.5K$</span>
              </div>
            </label>
          </div>
          <div className="flex items-center space-x-3 space-y-0">
            <label className="w-full cursor-pointer bg-transparent px-4 py-2 border rounded-lg border-gray-800 flex items-center gap-4">
              <input
                className="bg-transparent aspect-square h-4 w-4 rounded-full border border-gray-600 text-gray-200 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="radio"
                value="option2"
                checked={selectedOption3 === "option2"}
                onChange={handleOptionChange3}
              />
              <div className="text-right text-[#9ca3af] text-[0.9rem]">
                <span> From </span>
                {/* Pas d'espace ici */}
                <span dir="ltr">2.5K$</span> {/* Pas d'espace ici */}
                To {/* Pas d'espace ici */}
                <span dir="ltr"> 5K$</span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row mt-[15px] flex justify-center">
        <button  onClick={handleSend} className={styles.button35}>Send your information</button>
      </div>
       {/* Popup */}
      {popup.show && (
        <div
          className={`absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 ${popup.color} text-white px-6 py-3 rounded-lg shadow-lg animate-fadeIn`}
        >
          {popup.message}
        </div>
      )}
    </div>
  );
}
