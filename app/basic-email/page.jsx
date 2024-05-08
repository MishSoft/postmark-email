"use client";

import { useState } from "react";

export default function BasicEmail() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  async function sendEmail() {
    try {
      await fetch("/api/basic-email", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ subject, body }),
      });
      setSubject("");
      setBody("");
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
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="body"
          className="block text-sm font-medium text-gray-700"
        >
          Body
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          rows={4} // Set the number of rows you want
        ></textarea>
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
