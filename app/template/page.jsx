"use client";

import { useState } from "react";

export default function TemplateEmail() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  async function sendEmail() {
    try {
      await fetch("/api/template", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, age }),
      });
      setName("");
      setAge("");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="max-w-md text-gray-700 mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Send An Email</h2>
      <div className="mb-4">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          id="subject"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="body"
          className="block text-sm font-medium text-gray-700"
        >
          Age
        </label>
        <input
          id="subject"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <button
          onClick={sendEmail}
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        >
          Send Email
        </button>
      </div>
    </div>
  );
}
