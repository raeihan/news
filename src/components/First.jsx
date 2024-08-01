import React from 'react'
import Sec from './Sec'
import Card from './Card'


const First = () => {
  return (
    <>
      <div className='font-serif font-semibold text-3xl mb-12'>
        <Sec title={"Portal Berita Terkini"} />
      </div>
      <div className='flex'>
        <Card link="https://greatmind.id/article/on-marissa-s-mind-fomo" topic={"On Marissa's Mind: FOMO"} desc={"Sore hari tiba. Setelah melewati hari yang panjang, waktunya santai, buka ponsel dan medsos. Anda lihat teman-teman lagi menikmati island life, merekam temaram jingga matahari terbenam, menikmati hidangan spesial di restoran yang lagi naik daun."}
          img="https://greatmind.id/uploads/article-detail/23b6a04d42ccee0899c6a033dd0e51369cbf1fb5.jpg" see={"Lihat Selengkapnya"} />

        <Card link="https://greatmind.id/article/alam-seni-dan-kejernihan-pikiran" topic={"Alam, Seni, dan Kejernihan Pikiran"} desc={"Menghabiskan waktu di ruang terbuka bisa menjadi salah satu cara yang bisa dipilih. Beberapa studi menemukan bahwa menghabiskan waktu di alam dan ruang terbuka hijau ternyata dapat membantu memelihara kesehatan mental kita."}
          img="https://greatmind.id/uploads/article-thumbnail/0f7677e7c4e904a55d367cf61da5c67e31f3d03b.jpg" see={"Lihat Selengkapnya"} />

        <Card link="https://greatmind.id/article/on-marissa-s-mind-kuat-mental" topic={"On Marissa's Mind: Kuat Mental"} desc={"Siapa yang tidak mau punya mental kuat – kemampuan yang sangat penting kalau kita mau terus maju dan berkembang di tengah lika-liku kehidupan."}
          img="https://greatmind.id/uploads/article-detail/962a7e6b88b4223705d91061e545d8d748470af0.jpeg" see={"Lihat Selengkapnya"} />

        <Card link="https://greatmind.id/article/menghidupkan-budaya-mendongeng-di-indonesia" topic={"Menghidupkan Budaya Mendongeng di Indonesia"} desc={"Banyak waktu yang kami habiskan bersama anak-anak yang kemudian membuat kami memiliki keinginan untuk berkontribusi pada dunia pendidikan, khususnya bagi anak-anak."}
          img="https://greatmind.id/uploads/article-detail/a25a2acc59683130775feda7cdf17adc8d71c57a.jpeg" see={"Lihat Selengkapnya"} />
      </div>
    </>
  )
}

export default First