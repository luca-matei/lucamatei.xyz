import React from 'react';
import BionicReadingMain from "@/app/projects/bionic-reading/Main";
import BionicReadingAside from "@/app/projects/bionic-reading/Aside";

export default function PasswordGenerator() {
  return (
    <>
      <main className="lg:pl-72">
        <div className="xl:pr-96">
          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6 max-w-4xl m-auto">
            <BionicReadingMain></BionicReadingMain>
          </div>
        </div>
      </main>

      <aside
        className="fixed inset-y-0 right-0 hidden w-96 overflow-y-auto border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
        <BionicReadingAside></BionicReadingAside>
      </aside>
    </>
  );
};
