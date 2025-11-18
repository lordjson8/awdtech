'use client';
import { Link } from '@/i18n/navigation';
import React, { useState } from 'react';
// import Link from 'next-intl/link';

const LanguageButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className="block relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="flex p-2 rounded-md items-center border bg-black text-white"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Change Language
      </button>
      {isOpen && (
        <div
          className="absolute bg-black text-white rounded-md border"
          role="menu"
          aria-orientation="vertical"
        >
          <Link href="/" locale="fr">
            Francais
          </Link>
          <br />
          <Link href="/" locale="en">
            English
          </Link>
          <br />
        </div>
      )}
    </div>
  );
};

export default LanguageButton;