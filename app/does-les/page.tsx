import Link from "next/link";

export default function Page() {
  return <>
    <main className="container max-w-3xl my-8 lg:my-16">

      <Link href="/" className="underline hover:no-underline block w-max mb-8">&larr; Back to DOES Creative Hub</Link>

      <h1 className="text-2xl font-black">
        DOES Les
      </h1>
      <h2>
        Program Les Multimedia DOES University
      </h2>

      <p className="mt-8">
        Dilatarbelakangi oleh banyaknya permintaan &apos;kelas tambahan&apos; sekaligus menanggulangi masalah kapasitas daya tampung di DOES University, akhirnya program ini diinisiasikan.
      </p>
      <p className="mt-4">
        Perbedaan dengan jalur yang biasa (Generasi) :
      </p>
      <ul>
        <li>∙ Tidak wajib karantina</li>
        <li>∙ Membawa device sendiri</li>
        <li>∙ Dibebaskan menentukan jadwal pertemuan (maksimal 3 hari pertemuan dalam satu minggu)</li>
        <li>∙ Ada biaya mentoring (disesuaikan dengan level materi)</li>
      </ul>

      <p className="font-bold mt-4">
        Tidak ada batasan usia, maupun batasan jenjang pendidikan.
      </p>

      <p className="mt-4">
        Pilihan jurusan yang tersedia :
      </p>
      <ul>
        <li>∙ 3D Animation</li>
        <li>∙ 3D Modeling</li>
        <li>∙ 3D Vizual Architecture</li>
        <li>∙ UI/UX Designer</li>
        <li>∙ Front-End Web Development</li>
        <li>∙ Digital Art</li>
      </ul>

      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeGI5GsnAS_P5lUZkWT8WO9c4PP4O5LjJ33pTIEa8-k_mWxeg/viewform" target="_blank" rel="noopener noreferrer" className="block w-full md:w-max py-4 px-8 bg-black text-white duration-200 hover:bg-transparent hover:text-black border-4 border-transparent hover:border-black text-center md:text-left md:mr-8 mb-8 md:mb-0 font-black uppercase mt-8">Daftar Sekarang</Link>

      <p className="mt-4 text-sm">
        Setelah submit, kamu akan mendapat informasi selanjutnya berupa jadwal temu antara orang tua dengan pengurus DOES melalui WhatsApp (tunggu WhatsApp dari kami maksimal 24 jam setelah kamu submit).
      </p>

      <hr className="my-8" />

      <p className="text-sm opacity-50 font-light">
        Mandiri Dalam Bekerja, Merdeka Dalam Berkarya
      </p>
    </main>
  </>
}