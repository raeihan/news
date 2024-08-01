import React from "react";
import Header from "./components/Header";
import Card from "./Card";

const News = () => {
  const dataNews = [
    {
      title: "Pembunuhan Pemimpin Hamas Ismail Haniyeh, Israel dan Kebenaran Ucapan Ahmadinejad",
      date: "Kamis, 01 Agustus 2024 - 07:44 WIB",
      content:
        "Pemimpin Hamas Ismail Haniyeh tewas dibunuh dengan serangan rudal yang ditembakkan drone di kediamannya di Teheran, Iran, pada Selasa.",
      image:
        "https://pict.sindonews.net/webp/732/pena/news/2024/08/01/43/1426835/pembunuhan-pemimpin-hamas-ismail-haniyeh-israel-dan-kebenaran-ucapan-ahmadinejad-gur.webp",
      category: "News",
      link: "https://international.sindonews.com/read/1426835/43/pembunuhan-pemimpin-hamas-ismail-haniyeh-israel-dan-kebenaran-ucapan-ahmadinejad-1722470911",
    },

    {
      title: "Warga Dilarang Jual Rokok Eceran-Produsen Susu Formula Tak Boleh Lagi Beriklan",
      date: "Rabu, 31 Jul 2024 07:30 WIB",
      content:
        "Pemerintahan Presiden Joko Widodo (Jokowi) resmi melarang setiap orang menjual rokok secara eceran per batang. Produk tembakau dan rokok elektronik juga dilarang dijual kepada yang berusia di bawah 21 tahun dan perempuan hamil.",
      image:
        "https://akcdn.detik.net.id/community/media/visual/2021/12/31/tarif-cukai-harga-jual-eceran-rokok-2022-1_169.jpeg?w=700&q=90",
      category: "News",
      link: "https://finance.detik.com/berita-ekonomi-bisnis/d-7465334/warga-dilarang-jual-rokok-eceran-produsen-susu-formula-tak-boleh-lagi-beriklan",
    },

    {
      title: "Emirsyah Satar Juga Divonis Bayar Uang Pengganti Rp 1,4 Triliun",
      date: "Rabu, 31 Jul 2024 15:16 WIB",
      content:
        "Mantan Direktur Utama PT Garuda Indonesia (PT GA) Emirsyah Satar divonis 5 tahun penjara dan denda Rp 500 juta dalam kasus pengadaan pesawat CRJ-1000 dan ATR 72-600. Hakim juga menghukum Emirsyah membayar uang pengganti USD 86.367.019 atau setara Rp 1,4 triliun.",
      image:
        "https://akcdn.detik.net.id/community/media/visual/2019/12/30/1ca66149-eed6-43b2-8f53-eba0febe19c6_169.jpeg?w=700&q=90",
      category: "News",
      link: "https://news.detik.com/berita/d-7466571/emirsyah-satar-juga-divonis-bayar-uang-pengganti-rp-1-4-triliun",
    },

    {
      title: "Jokowi Rapat dengan Luhut hingga Arifin Tasrif, Pramono: Hal Serius",
      date: "Rabu, 31 Jul 2024 12:43 WIB",
      content:
        "Presiden Joko Widodo (Jokowi) mengadakan pertemuan dengan sejumlah menteri di Istana Negara, Jakarta. Hadir Menteri ESDM Arifin Tasrif, Menteri Keuangan Sri Mulyani, hingga Menko Marvest Luhut Binsar Pandjaitan.",
      image:
        "https://akcdn.detik.net.id/community/media/visual/2024/07/31/deretan-menteri-yang-mengikuti-rapat-bersama-presiden-jokowi-rabu-3172024_169.jpeg?w=700&q=90",
      category: "News",
      link: "https://news.detik.com/berita/d-7466176/jokowi-rapat-dengan-luhut-hingga-arifin-tasrif-pramono-hal-serius",
    },

    {
      title: "Heboh Ongkos Angkot di Bekasi Rp 25 Ribu, Pemkab Pasang Stiker Tarif",
      date: "Rabu, 31 Jul 2024 13:15 WIB",
      content:
        "Pemerintah Kabupaten (Pemkab) Bekasi merespons video viral penumpang angkot K-17 rute Cikarang-Cibarusah diminta ongkos Rp 25 ribu. Petugas gabungan akan melakukan razia atau operasi terhadap angkot K-17 yang minta ongkos di atas tarif yang telah ditentukan.",
      image:
        "https://akcdn.detik.net.id/community/media/visual/2024/07/30/video-penumpang-kaget-dengan-tarif-angkot-k-17-tujuan-cikarang-cibarusah-viral-di-medsos-penumpang-itu-tak-mengira-jika-dimint_169.jpeg?w=700&q=90",
      category: "News",
      link: "https://news.detik.com/berita/d-7466240/heboh-ongkos-angkot-di-bekasi-rp-25-ribu-pemkab-pasang-stiker-tarif",
    },

    {
      title: "Pemilik Daycare di Depok Ditangkap dan Jadi Tersangka Penganiaya Balita",
      date: "Kamis, 01 Agu 2024 07:48 WIB",
      content:
        "Perkembangan kasus penganiayaan balita di daycare kawasan Kota Depok tadi malam, pemilik penitipan anak tersebut sudah ditangkap polisi. Perempuan itu juga sudah menjadi tersangka penganiaya balita.",
      image:
        "https://akcdn.detik.net.id/community/media/visual/2024/07/31/daycare-di-harjamukti-depok-terlihat-dalam-kondisi-tutup-daycare-ini-menjadi-lokasi-balita-2-tahun-diduga-dianiaya.jpeg?w=700&q=90",
      category: "News",
      link: "https://news.detik.com/berita/d-7467597/pemilik-daycare-di-depok-ditangkap-dan-jadi-tersangka-penganiaya-balita",
    },
  ];
  return (
    <>
      <Header
        title="Berita Viral Tahun Ini"
        subtitle="Berita-berita terkini yang membahas seputar kehidupan manusia abad ini"
      />
      {/* Mapping Data Dari DataNews */}
      <div className="grid grid-cols-3 gap-4 px-10 py-5 max-lg:grid-cols-1 max-lg:px-3">
        {dataNews.map((news, index) => (
          <div key={index}>
            <Card
              title={news.title}
              date={news.date}
              content={news.content}
              image={news.image}
              category={news.category}
              link={news.link}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
