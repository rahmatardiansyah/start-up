'use client';

import { useRef, useState, useEffect } from 'react';

const InputDate = ({
  judul,
  name,
  prioritas
}: {
  judul: string;
  name: string;
  prioritas: boolean;
}) => {
  const [active, setActive] = useState<Boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [tanggal, setTanggal] = useState('');

  const handleActive = () => {
    inputRef.current?.focus();
    setActive(true);
  };

  useEffect(() => {
    const handle: any = (e: React.MouseEvent<any, MouseEvent>) => {
      if (!inputRef.current?.contains(e.target as HTMLButtonElement) && tanggal === '') {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', handle);

    return () => document.removeEventListener('mousedown', handle);
  }, [tanggal]);

  return (
    <div
      onClick={handleActive}
      className={` ${
        active ? ' border-blue-200' : 'border-gray-200'
      } border w-full md:w-[20%] flex items-center h-[50px] px-4 mt-2 rounded-md  relative`}
    >
      <span
        className={`${
          active
            ? '  top-[-0.65rem] text-[0.8rem] text-blue-500 font-semibold'
            : ' top-[0.7rem] text-[1rem] text-gray-400 '
        }  transition-all  absolute  ease-in-out duration-500  bg-white  `}
      >
        {judul}
      </span>
      <input
        ref={inputRef}
        type="date"
        onChange={(e) => setTanggal(e.target.value)}
        value={tanggal}
        name={name}
        id={name}
        required={prioritas}
        className={` ${active ? 'block' : 'hidden'} w-full  outline-none border-none text-gray-600`}
      />
    </div>
  );
};

export default InputDate;
