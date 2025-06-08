const contentData = [
  {
    id: 1,
    judul:
      "Projek Skripsi | Optimalisasi Penerapan Algoritma Clustering dalam Meningkatkan Performa Aturan Asosiasi FP-Growth untuk Rekomendasi Stok Penjualan Radio Komunikasi",
    description:
      "Projek skripsi menentukan rekomendasi stok menggunakan perbandingan algoritma <i>clustering</i> yaitu K-Means, HDBSCAN, dan <i>fuzzy c-means</i>, yang masing-masing memiliki karakteristik berbeda. Hasil algoritma terbaik kemudian dipilih berdasarkan nilai evaluasi <i>Silhouette</i>, DBI, dan Calinski-Harbasz Score, untuk memfilter data transaksi penjualan dari setiap <i>cluster</i> terbentuk dan dibandingkan dengan keseluruhan data transaksi. Kemudian filter dan keseluruhan data transaksi diproses dengan aturan asosiasi FP-Growth dan dibandingkan hasilnya. Didapatkan salah satu <i>cluster</i> memiliki nilai evaluasi <i>support</i> tertinggi sebesar 10% dengan produk yang sama juga muncul pada penerapan FP-Growth untuk data transaksi keseluruhan dengan evaluasi <i>support</i> tertinggi juga.",
    repo: null,
    certificate: null,
    linkPict: "image/project1/linkPict.png",
    listPict: [
      "image/project1/header/1.png",
      "image/project1/header/2.png",
      "image/project1/header/3.png",
      "image/project1/header/4.png",
    ],
    listSkill: ["image/project1/tech/1.png", "image/project1/tech/2.png"],
    listResponsibility: [
      "Melakukan agregasi data penjualan untuk proses clustering",
      "Mengembangkan model algoritma clustering K-Means, HDBSCAN, dan fuzzy c-means untuk mengelompokkan produk penjualan",
      "Membandingkan hasil evaluasi dengan Silhouette, Davies-Bouldin Index, dan Calinski-Harbasz Score untuk menentukan algoritma clustering terbaik",
      "Melakukan filtrasi kelompok produk dari data penjualan untuk setiap cluster",
      "Menerapkan algoritma FP-Growth untuk menentukan pola aturan asosiasi pada data keselurahan dan data penjualan per cluster",
      "Berhasil mengidentifikasi salah satu cluster dengan nilai support tertinggi sebesar 10% dengan produk yang sama muncul di hasil aturan asosiasi dengan support tertinggi pada data keseluruhan",
    ],
  },
  {
    id: 2,
    judul:
      "Submission Project Dicoding | Pemrograman Front-End Pemula - Website Bookshelf",
    description:
      "Projek aplikasi website repository buku (selesai dibaca/belum selesai dibaca). Projek ini menerapkan konsep yang dipelajari pada modul Pemrograman Front-End Pemula dari Dicoding seperti BOM (Browser Object Model) dan DOM (Document Object Model), Event dan Custom Event, serta penerapan Web Storage (Local dan Session Storage).",
    repo: null,
    certificate: "https://www.dicoding.com/certificates/MRZMN052KPYQ",
    linkPict: "image/project2/linkPict.png",
    listPict: [
      "image/project2/header/1.png",
      "image/project2/header/2.png",
      "image/project2/header/3.png",
      "image/project2/header/4.png",
    ],
    listSkill: [
      "image/project2/tech/1.png",
      "image/project2/tech/2.png",
      "image/project2/tech/3.png",
    ],
    listResponsibility: [
      "Membuat tampilan website repository buku yang interaktif",
      "Menerapkan konsep BOM dan DOM untuk menangkan event pada saat menambahkan buku pada dua rak berbeda (selesai dan belum selesai dibaca), memindahkan buku antar rak (buku sudah ditambahkan), dan menghapus buku",
      "Berhasil memanfaatkan Local Storage sebagai penyimpanan buku",
    ],
  },
  {
    id: 3,
    judul:
      "Submission Project Dicoding | Dasar Pemrograman Web - Website Portofolio",
    description:
      "Projek aplikasi website portofolio diri. Projek aplikasi ini menerapkan konsep yang dipelajari pada modul ini diantaranya seperti struktur dan anatomi HTML, Styling CSS, Float dan Overflow, serta Flexbox.",
    repo: null,
    certificate: "https://www.dicoding.com/certificates/0LZ0RV8KNP65",
    linkPict: "image/project3/linkPict.png",
    listPict: [
      "image/project3/header/1.png",
      "image/project3/header/2.png",
      "image/project3/header/3.png",
    ],
    listSkill: [
      "image/project3/tech/1.png",
      "image/project3/tech/2.png",
      "image/project3/tech/3.png",
    ],
    listResponsibility: [
      "Menerapkan struktur dan anatomi HTML secara benar dan sistematik",
      "Menerapkan elemen yang diwajibkan ada seperti Header, Footer, Main, Article, dan Aside, beserta isi konten yang sesuai peruntukkannya",
      "Membuat elemen aside menampilkan gambar berupa image",
      "Menerapkan teknik flexbox sebagai pengembangan layout yang responsif",
      "Menggunakan konsep kode JavaScript untuk menangani proses scrolling ketika section 'About Me' bergulir",
    ],
  },
  {
    id: 4,
    judul:
      "Submission Project Dicoding | Beginner Backend Developer Learning Path",
    description:
      "Projek backend modul Dicoding Backend Pemula dengan JavaScript. Projek akhir ini membuat REST API dengan JavaScript untuk repository buku (Bookshelf). Projek ini membuat <i>server side</i> untuk menyimpan buku dengan beberapa paramater <i>body</i>, mengambil data keseluruhan buku yang ada pada repository tersimpan, mengambil dan menghapus data buku berdasarkan id buku tersimpan, mengambil data buku yang sudah dan belum selesai terbaca, serta mengambil buku berdasarkan parameter nama.",
    repo: null,
    certificate: "https://www.dicoding.com/certificates/GRX54VO4KP0M",
    linkPict: "image/project4/linkPict.png",
    listPict: ["image/project4/header/1.png"],
    listSkill: [
      "image/project4/tech/1.png",
      "image/project4/tech/2.png",
      "image/project4/tech/3.png",
      "image/project4/tech/4.png",
    ],
    listResponsibility: [
      "Membangun web service menggunakan framework Hapi",
      "Menerapkan method request berbeda-beda untuk menyimpan, menampilkan seluruh, menampilkan detail, mengubah, dan menghapus data buku",
      "Menerapkan pengujian otomatis pada Postman",
    ],
  },
  {
    id: 5,
    judul: "Projek Mata Kuliah MANPROPEL | Masakuy Web App",
    description:
      "Projek aplikasi website mata kuliah manajemen projek perangkat lunak. Website ini dibangun dengan framework PHP untuk koneksi database dan framework JavaScript untuk proses login dan logout. Selain itu fitur yang disediakan selain login dan penyimpanan session, terdapat list article tentang masakan, resep masakan dengan berbagai kategori, serta menyimpan resep dalam list favorite.",
    repo: "https://github.com/calistasalscpw/Web-Resep-Makanan",
    certificate: null,
    linkPict: "image/project5/linkPict.png",
    listPict: [
      "image/project5/header/1.png",
      "image/project5/header/2.png",
      "image/project5/header/3.png",
      "image/project5/header/4.png",
    ],
    listSkill: [
      "image/project5/tech/1.png",
      "image/project5/tech/2.png",
      "image/project5/tech/3.png",
      "image/project5/tech/4.png",
      "image/project5/tech/5.png",
    ],
    listResponsibility: [
      "Mendesain halaman profil dan list favorite",
      "Menangani linked dari list makanan ke detail sesuai dengan id-nya",
      "Memproses backend database untuk koneksi ke halaman website",
    ],
  },
  {
    id: 6,
    judul: "Projek Mata Kuliah SPK | Powery Web App",
    description: `Projek aplikasi website mata kuliah Sistem Pendukung Keputusan. Ini merupakan project software berbasis website yang dibangun di atas framework PHP sebagai konektivitas dengan local database (MySQL). Database digunakan sebagai penampung hasil dari perhitungan <i>Analytical Hierarchical Process</i> (AHP). Input penilaian berasal dari User dan penilaian dilakukan otomatis menggunakan model AHP dari Python. Hasil dari penilaian ditampilkan secara berurutan sebagai rekomendasi personal user. Projek ini berhasil maju ke <a href="https://youtu.be/PwTG2MhGvmc?t=21580">prosiding ICONICSS 2024</a>.`,
    repo: "https://github.com/Divasetya/Sistem-Pendukung-Keputusan-dalam-Memilih-Mobil-Listrik",
    certificate: null,
    linkPict: "image/project6/linkPict.png",
    listPict: [
      "image/project6/header/1.png",
      "image/project6/header/2.png",
      "image/project6/header/3.png",
      "image/project6/header/4.png",
      "image/project6/header/5.png",
    ],
    listSkill: [
      "image/project6/tech/1.png",
      "image/project6/tech/2.png",
      "image/project6/tech/3.png",
      "image/project6/tech/4.png",
    ],
    listResponsibility: [
      "Mendesain halaman utama untuk memulai perhitungan AHP",
      "Membangun model AHP dengan Python dan konektivitas database",
      "Mendesain database beserta relationalnya untuk menampung data input user dan hasil perhitungan AHP",
      "Mengoneksikan tampilan HTML dengan database menggunakan framework PHP",
    ],
  },
  {
    id: 7,
    judul:
      "Submission Project Dicoding | Beginner Machine Learning Learning Path",
    description:
      "Projek submission Dicoding untuk modul Machine Learning untuk Pemula yaitu Klasifikasi Suit Gunting, Batu, Kertas dengan algoritma supervised learning yaitu K-Nearest Neighbour, di mana kelebihannya memproses fitur gambar dengan memecah piksel menjadi bagian-bagian kecil serta membuat kelas terpecah untuk training dan testing. Hasil testing yang dilakukan dengan epoch 30 didapatkan kurang dari 30 menit (sesuai dengan persyaratan Dicoding) dan akurasi di atas 80%.",
    repo: null,
    certificate: "https://www.dicoding.com/certificates/QLZ944NDMP5D",
    linkPict: "image/project7/linkPict.png",
    listPict: [
      "image/project7/header/1.png",
      "image/project7/header/2.png",
      "image/project7/header/3.png",
      "image/project7/header/4.png",
    ],
    listSkill: ["image/project7/tech/1.png"],
    listResponsibility: [
      "Memilih algoritma unsupervised untuk menangani dataset yang berupa gambar yaitu Convolutional Neural Network",
      "Memodelkan algoritma KNN dengan 4 layer convolution dan max pooling, layer flatten untuk reshape output dari layer sebelumnya, dan 2 layer dense untuk menyambungkan setiap data (gambar) pada potongan layer sebelumnya",
      "Fitting model dengan 20 epochs pada data latih dan menghasilkan pelatihan data kurang dari 30 menit (sesuai dengan syarat submission)",
    ],
  },
  {
    id: 8,
    judul: "Projek Capstone Bangkit 2023 | Mobile ResQ Food Application",
    description:
      "Projek aplikasi berbasis mobile yang dirancang untuk menangani <i>user side</i> pada pemesanan makanan sisa (<i>Food Waste</i>) secara <i>online</i>. Aplikasi ini dibuat fokus untuk sisi pengguna saja, di mana fitur yang disediakan antara lain: login dan register (integrasi Firebase verfication & authentication), list food (sesuai rekomendasi lokasi dan preferensi usia(Machine Learning)), detail food, order, list dan history order, maps (location), dan subscription (monetice).",
    repo: "https://github.com/kjonathan311/FoodResQ-MD-",
    certificate: null,
    linkPict: "image/project8/linkPict.png",
    listPict: [
      "image/project8/header/1.png",
      "image/project8/header/2.png",
      "image/project8/header/3.png",
    ],
    listSkill: [
      "image/project8/tech/1.png",
      "image/project8/tech/2.png",
      "image/project8/tech/3.png",
    ],
    listResponsibility: [
      "Mendesain aplikasi mobile dengan XML berdasarkan kesepakatan desain Figma",
      "Memodelkan proses login dan authorization dengan Firebase",
      "Berkoordinasi dengan tim Cloud Computing dan Machine Learning untuk model alur kerja projek aplikasi",
      "Mengonsumsi API yang telah dibangun oleh tim Cloud Computing dan API Google Maps pada aplikasi",
      "Membuat list view makanan secara vertical, horizontal, dan grid view",
      "Membuat logika proses pemesanan dan memasukkan ke proses list order",
    ],
  },
  {
    id: 9,
    listPict: ["image/project9/header/1.png", "image/project9/header/2.png"],
    listSkill: ["image/project9/tech/1.png", "image/project9/tech/2.png"],
    projects: [
      {
        projectId: 0,
        projectName:
          "Submission Projek Dicoding | Belajar Aplikasi Android dengan Jetpack Compose",
        projectDesc:
          "Projek aplikasi berbasis mobile untuk penjualan tiket pesawat dengan Kotlin yang dibangun dengan Jetpack Compose",
        repo: null,
        certificate: "https://www.dicoding.com/certificates/1RXY1YLW1PVM",
        linkPict: "image/project9/linkPict0.png",
        listResponsibility: [
          "Membuat halaman list menggunakan LazyList dengan jumlah data sebanyak 10 item berbeda",
          "Menampilkan halaman detail yang sesuai ketika menekan item pada list di halaman sebelumnya",
          "Menampilkan halaman about berisi nama, foto diri, dan email",
        ],
      },
      {
        projectId: 1,
        projectName:
          "Submission Projek Dicoding | Belajar Pengenbangan Aplikasi Android Intermediate",
        projectDesc:
          "Projek aplikasi berbasis mobile story list (upload gambar dan deskripsi) dengan Kotlin",
        repo: null,
        certificate: "https://www.dicoding.com/certificates/1RXY149MQPVM",
        linkPict: "image/project9/linkPict1.png",
        listResponsibility: [
          "Membangun halaman login dengan save session login dan menyimpan sesi token pada preferences",
          "Membangun halaman register user dengan menerapkan proses yang sesuai dari mulai email dan password sesuai dengan ketentuan",
          "Membuat sesi logout dan berhasil menghapus sesi pada saat logout",
          "Memastikan ketika logout dan apabila menekan tombol back tidak kembali ke halaman sebelumnya, melainkan keluar aplikasi",
          "Menambahkan cerita menggunakan konsep Intent media (kamera dan gallery) dan berhasil mengupload ke API",
          "Berhasil memunculkan cerita yang telah ditambahkan ke halaman list sesaat setelah cerita ditambahkan tampa perlu refresh halaman",
          "Membuka halaman detail sesuai dengan kontennya",
          "Membuat animation pada aplikasi menggunakan Transition dan MotionLayout",
          "Mengakses dan membuat personal API Token Google Maps",
          "Menampilkan halaman list cerita dengan pointing Maps dan menampilkan detail pada marker maps yang dituju",
          "Menggunakan konsep Paging 3 pada list story",
          "Melakukan Unit Testing menggunakan dummy data untuk ViewModel yang menampilkan list cerita",
        ],
      },
      {
        projectId: 2,
        projectName:
          "Submission Projek Dicoding | Belajar Fundamental Aplikasi Android",
        projectDesc:
          "Projek aplikasi berbasis mobile list user GitHub dan Favourite User dengan Kotlin",
        repo: null,
        certificate: "https://www.dicoding.com/certificates/L4PQ8JD3VZO1",
        linkPict: "image/project9/linkPict2.png",
        listResponsibility: [
          "Membuat dan mendesain tampilan halaman aplikasi menggunakan berkas XML",
          "Membuat halaman list menggunakan Recycler View",
          "Mengimplementasikan konsep Fragment pada halaman-halaman aplikasi yang dapat didaur ulang",
          "Mengakses GitHub untuk membuat personal token API",
          "Mengoneksikan dan konsumsi API GitHub untuk menampilkan list user",
          "Membuat ViewModel untuk menangani pengambilan data dari API",
          "Membuat fitur pencarian user menggunakan input nama atau username pada kolom pencarian",
          "Membuat halaman akses detail yang menampilkan detail user beserta list followers dan following menggunakan Tab Layout dan ViewPager2",
          "Menggunakan konsep Background Thread Retrofit untuk menampilkan loading pada saat pengambilan data sebelum ditampilkan pada sisi user",
          "Membuat halaman list user favorite",
          "Mengimplementasikan konsep database Room dan Dao untuk mengatur favourite user",
          "Berhasil membangun aplikasi untuk menambahkan, menghapus, dan menampilkan list user favorite",
          "Membuat halaman pengaturan tema aplikasi (gelap dan terang) menggunakan SharedPreference",
        ],
      },
      {
        projectId: 3,
        projectName:
          "Submission Projek Dicoding | Belajar Membuat Aplikasi Android untuk Pemula",
        projectDesc:
          "Projek aplikasi berbasis mobile untuk penyewaan kamar kosan dengan Kotlin",
        repo: null,
        certificate: "https://www.dicoding.com/certificates/N9ZO5EO16PG5",
        linkPict: "image/project9/linkPict3.png",
        listResponsibility: [
          "Membangun projek aplikasi dan mendesain tampilan pada berkas XML",
          "Menggunakan konsep Activity untuk membuat setiap halaman projek",
          "Membuat tampilan halaman list dengan 10 item berbeda menggunakan konsep Recycler View",
          "Membuat halaman detail dan mengarahkan item pada halaman list ke masing-masing detail dengan konten yang sesuai menggunakan Intent Activity",
          "Membuat halaman about berisikan data diri",
          "Menerapkan style dan theme yang menyesuaikan tema projek",
        ],
      },
      {
        projectId: 4,
        projectName:
          "Submission Projek Dicoding | Memulai Pemrograman dengan Kotlin",
        projectDesc:
          "Projek submission modul Kotlin yang mengimplementasikan control flow, generics, collections, dan coroutines",
        repo: null,
        certificate: "https://www.dicoding.com/certificates/4EXGNW2YDZRL",
        linkPict: "image/project9/linkPict4.png",
        listResponsibility: [
          "Mengimplementasikan fundamental Kotlin",
          "Mengimplementasikan control flow pada Kotlin",
          "Mengimplementasikan generics Kotlin (class, function, constrain type, variance)",
          "Mengimplementasikan tipe data collection seperti list dan map pada Kotlin",
          "Mengimplementasikan Coroutines dengan suspending function dan delay",
          "Melakukan testing pada projek latihan",
        ],
      },
    ],
  },
];

window.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  console.log("data ID :", id);

  const data = contentData.find((item) => item.id === id);
  console.log("data found : ", data);

  const body = document.getElementById("main-body");

  if (!data) {
    const main = document.createElement("main");

    const div = document.createElement("div");
    div.classList.add("no-content-available");

    const noContentImage = document.createElement("img");
    const noContentText = document.createElement("p");
    noContentImage.src = "image/no-content.png";
    noContentText.innerText = "Tidak ada konten untuk ditampilkan";

    div.append(noContentImage, noContentText);
    main.appendChild(div);
    body.appendChild(main);
  } else {
    const div = document.createElement("div");
    div.classList.add("background");
    div.id = "background";

    const main = document.createElement("main");

    //section gallery//
    const sectionGallery = document.createElement("section");
    sectionGallery.classList.add("panel-gallery-project");

    const divGallery = document.createElement("div");
    divGallery.classList.add("gallery");

    data.listPict.forEach((src) => {
      const imageGallery = document.createElement("img");
      imageGallery.src = src;
      imageGallery.alt = "";
      divGallery.appendChild(imageGallery);
    });

    sectionGallery.appendChild(divGallery);

    //(tambah penanganan data id = 9)
    if (data.id == 9) {
      const divContent = document.createElement("div");
      divContent.classList.add("content");

      data.projects.forEach((project) => {
        const divSeparate = document.createElement("div");
        divSeparate.classList.add("content-separator");

        //section introduce//
        const sectionIntroduce = document.createElement("section");
        sectionIntroduce.classList.add("panel-introduce-project");

        const divLinked = document.createElement("div");
        divLinked.classList.add("linked");

        const imageLinked = document.createElement("img");
        imageLinked.src = project.linkPict;
        imageLinked.alt = "";

        divLinked.appendChild(imageLinked);

        if (project.repo != null) {
          const buttonProject = document.createElement("button");
          buttonProject.id = "btn-to-project";
          buttonProject.innerText = "See Project";
          buttonProject.addEventListener("click", () => {
            window.location.href = project.repo;
          });

          divLinked.appendChild(buttonProject);
        }

        if (project.certificate != null) {
          const buttonCertificate = document.createElement("button");
          buttonCertificate.id = "btn-to-certificate";
          buttonCertificate.innerText = "See Certification";
          buttonCertificate.addEventListener("click", () => {
            window.location.href = project.certificate;
          });

          divLinked.appendChild(buttonCertificate);
        }

        const divIntroduce = document.createElement("div");
        divIntroduce.classList.add("introduce");

        const h3ProjectName = document.createElement("h3");
        h3ProjectName.classList.add("name-project");
        h3ProjectName.id = "projectName";
        h3ProjectName.innerHTML = project.projectName;

        const pProjectDesc = document.createElement("p");
        pProjectDesc.id = "projectDesc";
        pProjectDesc.innerHTML = project.projectDesc;

        divIntroduce.append(h3ProjectName, pProjectDesc);

        sectionIntroduce.append(divLinked, divIntroduce);

        //section responsible//
        const sectionResponsible = document.createElement("section");
        sectionResponsible.classList.add("panel-responsible-project");

        const divResponsibility = document.createElement("div");
        divResponsibility.classList.add("responsibility");

        const h3Responsibility = document.createElement("h3");
        h3Responsibility.classList.add("responsibility-project");
        h3Responsibility.innerText = "Responsibilities";

        const ulResponsibility = document.createElement("ul");
        project.listResponsibility.forEach((responsibility) => {
          const liResponsibility = document.createElement("li");
          liResponsibility.innerText = responsibility;

          ulResponsibility.appendChild(liResponsibility);
        });

        divResponsibility.append(h3Responsibility, ulResponsibility);

        sectionResponsible.appendChild(divResponsibility);

        divSeparate.append(sectionIntroduce, sectionResponsible);

        divContent.append(divSeparate);
      });

      //section technology//
      const sectionTechnology = document.createElement("section");
      sectionTechnology.classList.add("panel-technology-project");

      const h3Technology = document.createElement("h3");
      h3Technology.innerText = "Skills";

      const divTechnology = document.createElement("div");
      divTechnology.classList.add("technology");

      data.listSkill.forEach((src) => {
        const imageTechnology = document.createElement("img");
        imageTechnology.src = src;
        imageTechnology.alt = "";
        divTechnology.appendChild(imageTechnology);
      });

      sectionTechnology.append(h3Technology, divTechnology);

      //combine main//
      main.append(sectionGallery, divContent, sectionTechnology);
    } else {
      //section introduce//
      const sectionIntroduce = document.createElement("section");
      sectionIntroduce.classList.add("panel-introduce-project");

      const divLinked = document.createElement("div");
      divLinked.classList.add("linked");

      const imageLinked = document.createElement("img");
      imageLinked.src = data.linkPict;
      imageLinked.alt = "";

      divLinked.appendChild(imageLinked);

      if (data.repo != null) {
        const buttonProject = document.createElement("button");
        buttonProject.id = "btn-to-project";
        buttonProject.innerText = "See Project";
        buttonProject.addEventListener("click", () => {
          window.location.href = data.repo;
        });

        divLinked.appendChild(buttonProject);
      }

      if (data.certificate != null) {
        const buttonCertificate = document.createElement("button");
        buttonCertificate.id = "btn-to-certificate";
        buttonCertificate.innerText = "See Certification";
        buttonCertificate.addEventListener("click", () => {
          window.location.href = data.certificate;
        });

        divLinked.appendChild(buttonCertificate);
      }

      const divIntroduce = document.createElement("div");
      divIntroduce.classList.add("introduce");

      const h3ProjectName = document.createElement("h3");
      h3ProjectName.classList.add("name-project");
      h3ProjectName.id = "projectName";
      h3ProjectName.innerHTML = data.judul;

      const pProjectDesc = document.createElement("p");
      pProjectDesc.id = "projectDesc";
      pProjectDesc.innerHTML = data.description;

      divIntroduce.append(h3ProjectName, pProjectDesc);

      sectionIntroduce.append(divLinked, divIntroduce);

      //section responsible//
      const sectionResponsible = document.createElement("section");
      sectionResponsible.classList.add("panel-responsible-project");

      const divResponsibility = document.createElement("div");
      divResponsibility.classList.add("responsibility");

      const h3Responsibility = document.createElement("h3");
      h3Responsibility.classList.add("responsibility-project");
      h3Responsibility.innerText = "Responsibilities";

      const ulResponsibility = document.createElement("ul");
      data.listResponsibility.forEach((responsibility) => {
        const liResponsibility = document.createElement("li");
        liResponsibility.innerText = responsibility;

        ulResponsibility.appendChild(liResponsibility);
      });

      divResponsibility.append(h3Responsibility, ulResponsibility);

      sectionResponsible.appendChild(divResponsibility);

      //section technology//
      const sectionTechnology = document.createElement("section");
      sectionTechnology.classList.add("panel-technology-project");

      const h3Technology = document.createElement("h3");
      h3Technology.innerText = "Skills";

      const divTechnology = document.createElement("div");
      divTechnology.classList.add("technology");

      data.listSkill.forEach((src) => {
        const imageTechnology = document.createElement("img");
        imageTechnology.src = src;
        imageTechnology.alt = "";
        divTechnology.appendChild(imageTechnology);
      });

      sectionTechnology.append(h3Technology, divTechnology);

      //combine main//
      main.append(
        sectionGallery,
        sectionIntroduce,
        sectionResponsible,
        sectionTechnology
      );
    }

    body.append(div, main);
  }
});
