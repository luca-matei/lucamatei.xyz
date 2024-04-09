"use client";
import { useState, useEffect } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClipboard, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { Switch } from '@headlessui/react'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function PasswordGeneratorMain() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const generatePassword = () => {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+=-[]{}|;:",.<>?/';
    let characters = '';
    if (includeLowercase) characters += lowercaseLetters;
    if (includeUppercase) characters += uppercaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.floor(Math.random() * characters.length);
      password += characters[charIndex];
    }
    setPassword(password);
  };

  useEffect(() => {
    generatePassword();
  }, [passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Password Generator
        </h2>
        <p className="mt-4 text-gray-500">Create safe passwords to use for your accounts</p>
      </div>
      <div className="flex flex-wrap gap-4 mb-4">
        <Switch.Group as="div" className="flex items-center">
          <Switch
            checked={includeLowercase}
            onChange={setIncludeLowercase}
            className={classNames(
              includeLowercase ? 'bg-indigo-600' : 'bg-gray-200',
              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                includeLowercase ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
              )}
            />
          </Switch>
          <Switch.Label as="span" className="ml-3 text-sm whitespace-nowrap">
            <span className="font-medium text-gray-900">Lowercase Letters</span>{' '}
            <span className="text-gray-500">(a-z)</span>
          </Switch.Label>
        </Switch.Group>
        <Switch.Group as="div" className="flex items-center">
          <Switch
            checked={includeUppercase}
            onChange={setIncludeUppercase}
            className={classNames(
              includeUppercase ? 'bg-indigo-600' : 'bg-gray-200',
              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                includeUppercase ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
              )}
            />
          </Switch>
          <Switch.Label as="span" className="ml-3 text-sm whitespace-nowrap">
            <span className="font-medium text-gray-900">Uppercase Letters</span>{' '}
            <span className="text-gray-500">(A-Z)</span>
          </Switch.Label>
        </Switch.Group>
        <Switch.Group as="div" className="flex items-center">
          <Switch
            checked={includeNumbers}
            onChange={setIncludeNumbers}
            className={classNames(
              includeNumbers ? 'bg-indigo-600' : 'bg-gray-200',
              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                includeNumbers ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
              )}
            />
          </Switch>
          <Switch.Label as="span" className="ml-3 text-sm whitespace-nowrap">
            <span className="font-medium text-gray-900">Digits</span>{' '}
            <span className="text-gray-500">(0-9)</span>
          </Switch.Label>
        </Switch.Group>
        <Switch.Group as="div" className="flex items-center">
          <Switch
            checked={includeSymbols}
            onChange={setIncludeSymbols}
            className={classNames(
              includeSymbols ? 'bg-indigo-600' : 'bg-gray-200',
              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                includeSymbols ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
              )}
            />
          </Switch>
          <Switch.Label as="span" className="ml-3 text-sm whitespace-nowrap">
            <span className="font-medium text-gray-900">Symbols</span>{' '}
            <span className="text-gray-500">(!@#$%)</span>
          </Switch.Label>
        </Switch.Group>
      </div>
      <div className="flex items-center gap-2 mb-8">
        <span className="font-medium text-gray-900 whitespace-nowrap">Length</span>
        <input
          type="range"
          min="4"
          max="64"
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
          className="form-range appearance-none w-full h-2 p-0 bg-gray-200 rounded-lg cursor-pointer"
        />
        <input
          type="number"
          min="4"
          max="512"
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
          className="w-16 px-2 py-1 text-center bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="flex items-center space-x-2">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          readOnly
          className="form-input w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          className="p-2 text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          {showPassword ? <FontAwesomeIcon icon={faEyeSlash} className="h-5 w-5"/> :
            <FontAwesomeIcon icon={faEye} className="h-5 w-5"/>}
        </button>
        <button
          onClick={copyToClipboard}
          className="p-2 text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <FontAwesomeIcon icon={faClipboard} className="h-5 w-5"/>
        </button>
      </div>
    </>
  );
};
