'use client';

import { MdOutlineSubtitles, MdOutlinePersonOutline } from 'react-icons/md';
import { FaRegFileAlt } from 'react-icons/fa';
import { Formik, useFormik } from 'formik';
import dynamic from 'next/dynamic';

const InputDate = dynamic(() => import('../../atom/inputDate/InputDate'));
const InputText = dynamic(() => import('../../atom/inputText/InputText'));
const InputFile = dynamic(() => import('../../atom/InputFile/InputFile'));
const InputTextArea = dynamic(() => import('../../atom/inputTextArea/InputTextArea'));
const DataInput = dynamic(() => import('./atom/dataInput/DataInput'));
const ValidasiPage = dynamic(() => import('./atom/validasi/Validasi'));

const dataInput: inputTypeForm[] = [
  {
    label: 'Tanggal deatline',
    desc: ' Tentukan batas jam tugas sesuai ketentuan Anda. Waktu Indonesia Barat(WIB) menjadi standar waktu',
    judul: 'Jam Deadline',
    name: 'deadline',
    input: InputDate,
    prioritas: true
  },
  {
    label: 'Judul Skripsi',
    desc: 'Buatlah judul article sesuai kata kunci yang umum digunakan. Ini akan memudahkan worker mengerjakan tugas Anda',
    judul: 'Judul Skripsi',
    name: 'skripsi',
    input: InputText,
    icon: MdOutlineSubtitles,
    prioritas: true
  },
  {
    label: 'Nama Pengguna',
    desc: 'Buatlah Nama pengguna sesuai kata kunci yang umum digunakan. Ini akan memudahkan worker mengerjakan tugas Anda',
    judul: 'Pengguna',
    name: 'namaPengguna',
    input: InputText,
    icon: MdOutlinePersonOutline,
    prioritas: true
  },
  {
    label: 'Description (Optional)',
    desc: 'Buatlah description yang mudah dipahami. Ini akan memudahkan worker mengerjakan tugas Anda',
    judul: 'description',
    name: 'description',
    input: InputTextArea,
    prioritas: false
  },
  {
    label: 'File Tambahan (Optional)',
    desc: 'Jika ada file soal ataupun file yang membantu mungkin bisa dapat disertakan dalam satu PDF',
    judul: 'File Tambahan',
    name: 'file',
    input: InputFile,
    icon: FaRegFileAlt,
    prioritas: false
  }
];

const FormInputSkripsi = ({
  page,
  setPage,
  handleNext
}: {
  page: Number;
  setPage: Function;
  handleNext: Function;
}) => {
  const handleSubmit = () => {
    console.log('oke');
  };

  const formik = useFormik({
    initialValues: {
      deadline: '',
      skripsi: '',
      namaPengguna: '',
      description: '',
      file: '',
      type: 'skripsi'
    },
    onSubmit: handleSubmit
  });

  return (
    <div className=" w-full h-full    bg-white mt-5  p-4 rounded-xl shadow-md">
      <form action="" onSubmit={formik.handleSubmit} className=" flex flex-col gap-y-8">
        {page === 1 && <DataInput dataInput={dataInput} formik={formik} />}
        {page === 2 && <ValidasiPage />}
        <section className="button  mt-3  flex justify-between w-full ">
          {page === 1 && <span />}
          {page === 2 && (
            <button
              className=" flex items-center gap-3 font-semibold"
              onClick={() => setPage(1)}
              type="button"
            >
              <span>{`<`}</span> Kembali
            </button>
          )}

          <button
            type={`${page === 2 ? 'submit' : 'button'}`}
            onClick={() => {
              page === 1 && handleNext();
            }}
            className=" border w-[40%] md:w-[20%] px-4 py-2  rounded-2xl bg-[#3B82F6] transition-all ease-in-out duration-300 hover:scale-110 font-semibold text-white text-[0.8rem] outline-blue-600"
          >
            {page === 2 ? 'Buat Pekerjaan' : 'Selanjutnya'}{' '}
            <span className=" ml-3 text-[1rem]">{`>`}</span>
          </button>
        </section>
      </form>
    </div>
  );
};

export default FormInputSkripsi;
