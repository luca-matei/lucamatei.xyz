"use client";
import React from 'react';
import { useState, useEffect } from 'react';

export default function BionicReadingMain() {
  const [inputText, setInputText] = useState('');
  const [bionicText, setBionicText] = useState('');
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const convertToBionicReading = (text: string) => {
    return text
      .split(' ')
      .map((word) => {
        const partLength = Math.ceil(word.length / 2);
        return `<strong>${word.substring(0, partLength)}</strong>${word.substring(partLength)}`;
      })
      .join(' ');
  };

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      setBionicText(convertToBionicReading(inputText));
    }, 500);

    setTimer(newTimer);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [inputText]);

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Bionic Reading
        </h2>
        <p className="mt-4 text-gray-500">Read faster, helps with dyslexia</p>
      </div>
      <div className="flex flex-col space-y-4">
        <textarea
          className="w-full min-h-14 p-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Type here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <div
          className="w-full min-h-14 p-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm"
          dangerouslySetInnerHTML={{__html: bionicText}}
        ></div>
      </div>
      <div className="mt-4">
        <button
          className="self-start px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          onClick={() => setInputText('')}
        >
          Reset
        </button>
      </div>
    </>
  );
};
