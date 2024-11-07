import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>MESEGİP - Mesleki Eğitimde Entegre Gelişim Projesi</title>
        <meta name="description" content="Uşak Mesleki ve Teknik Anadolu Lisesi 2053 Vizyon Projesi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="text-xl font-bold">T.C.</h1>
            <h2 className="text-lg font-semibold">UŞAK VALİLİĞİ</h2>
            <h3 className="text-lg font-semibold">İL MİLLİ EĞİTİM MÜDÜRLÜĞÜ</h3>
            <h4 className="text-md font-semibold">UŞAK MESLEKİ VE TEKNİK ANADOLU LİSESİ MÜDÜRLÜĞÜ</h4>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Akademik İzleme Formları', icon: '📝', link: '/akademik-izleme' },
            { title: 'Mesleki Gelişim Formları', icon: '📚', link: '/mesleki-gelisim' },
            { title: 'Staj Değerlendirme', icon: '💼', link: '/staj-degerlendirme' },
            { title: 'Rehberlik Formları', icon: '👥', link: '/rehberlik' },
            { title: 'Proje Takip Sistemi', icon: '⚙️', link: '/proje-takip' },
            { title: '2053 Vizyon Analizi', icon: '🎯', link: '/vizyon-analizi' }
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-medium">{item.title}</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
