import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AkademikIzleme() {
  const [formData, setFormData] = useState({
    ogrenciAd: '',
    ogrenciSoyad: '',
    sinif: '',
    numara: '',
    tarih: ''
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Head>
        <title>Akademik İzleme Formu - MESEGİP</title>
      </Head>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold">T.C.</h1>
          <h2 className="text-lg font-semibold">UŞAK VALİLİĞİ</h2>
          <h3 className="text-lg font-semibold">İL MİLLİ EĞİTİM MÜDÜRLÜĞÜ</h3>
          <h4 className="text-md font-semibold mb-4">UŞAK MESLEKİ VE TEKNİK ANADOLU LİSESİ MÜDÜRLÜĞÜ</h4>
          <h5 className="text-lg font-bold">AKADEMİK İZLEME FORMU</h5>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Öğrenci Adı</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.ogrenciAd}
                onChange={(e) => setFormData({...formData, ogrenciAd: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Öğrenci Soyadı</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.ogrenciSoyad}
                onChange={(e) => setFormData({...formData, ogrenciSoyad: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Sınıf</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.sinif}
                onChange={(e) => setFormData({...formData, sinif: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Numara</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.numara}
                onChange={(e) => setFormData({...formData, numara: e.target.value})}
              />
            </div>
          </div>

          <div>
            <h6 className="font-semibold mb-4">Akademik Performans Değerlendirmesi</h6>
            <div className="space-y-4">
              {[
                "Derse Katılım",
                "Ödev Tamamlama",
                "Sınav Başarısı",
                "Proje Çalışmaları",
                "Laboratuvar Performansı"
              ].map((kriter) => (
                <div key={kriter} className="grid grid-cols-6 gap-4 items-center">
                  <div className="col-span-2">{kriter}</div>
                  <div className="col-span-4 grid grid-cols-5 gap-2">
                    {[1, 2, 3, 4, 5].map((puan) => (
                      <label key={puan} className="flex items-center justify-center">
                        <input
                          type="radio"
                          name={kriter}
                          value={puan}
                          className="mr-1"
                        />
                        {puan}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Öğretmen Görüşü</label>
            <textarea
              className="w-full p-2 border rounded h-32"
              placeholder="Öğrencinin akademik durumu hakkında görüşlerinizi yazınız..."
            />
          </div>

          <div className="flex justify-between">
            <Link href="/" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Geri
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
