const popularTitle = document.createElement('h2');
const regularTitle = document.createElement('h2');
const freeTitle = document.createElement('h2');
const header = document.querySelector('header');
const backToTop = document.querySelector('.back-to-top');
    
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // Header scroll effect
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            backToTop.classList.add('active');
        } else {
            header.classList.remove('scrolled');
            backToTop.classList.remove('active');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Active menu item based on scroll position
    window.addEventListener('scroll', function() {
        let current = '';
        
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Phone Carousel Animation
    const phones = document.querySelectorAll('.phone-mockup');
    let currentPhoneIndex = 0;
    
    // Initially show the first phone
    if (phones.length > 0) {
        phones[0].classList.add('active');
    }
    
    // Set up the carousel to cycle through phones
    function cyclePhones() {
        // Hide current phone
        phones[currentPhoneIndex].classList.remove('active');
        
        // Move to next phone
        currentPhoneIndex = (currentPhoneIndex + 1) % phones.length;
        
        // Show next phone
        phones[currentPhoneIndex].classList.add('active');
    }
    
    // Start cycling after the initial animations complete (9 seconds)
    setTimeout(() => {
        // Cycle every 3 seconds
        setInterval(cyclePhones, 3000);
    }, 9000);

    // Testimonial slider functionality
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        testimonialSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            testimonialSlider.classList.add('active');
            startX = e.pageX - testimonialSlider.offsetLeft;
            scrollLeft = testimonialSlider.scrollLeft;
        });

        testimonialSlider.addEventListener('mouseleave', () => {
            isDown = false;
            testimonialSlider.classList.remove('active');
        });

        testimonialSlider.addEventListener('mouseup', () => {
            isDown = false;
            testimonialSlider.classList.remove('active');
        });

        testimonialSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialSlider.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        testimonialSlider.addEventListener('touchstart', (e) => {
            isDown = true;
            testimonialSlider.classList.add('active');
            startX = e.touches[0].pageX - testimonialSlider.offsetLeft;
            scrollLeft = testimonialSlider.scrollLeft;
        });

        testimonialSlider.addEventListener('touchend', () => {
            isDown = false;
            testimonialSlider.classList.remove('active');
        });

        testimonialSlider.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - testimonialSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialSlider.scrollLeft = scrollLeft - walk;
        });
    }

    // Video placeholder click handler
    const videoPlaceholder = document.querySelector('.video-placeholder');
    
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            const videoContainer = document.querySelector('.video-container');
            
            // Replace placeholder with actual video embed
            // This is a placeholder - in a real implementation, you would replace with actual video URL
            videoContainer.innerHTML = `
                <iframe width="100%" height="350" src="https://youtu.be/X6amKwCs5QQ?si=VjfXSePPSMYpIYwv" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            `;
        });
    }

    // Animation for feature cards on hover
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Single pricing card hover effect
    const singlePricingCard = document.querySelector('.single-pricing-card');
    
    if (singlePricingCard) {
        singlePricingCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        singlePricingCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }

    // Buy now button click tracking
    const buyButtons = document.querySelectorAll('.buy-now');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // In a real implementation, you might want to track clicks or show a confirmation
            console.log('Buy button clicked:', this.getAttribute('href'));
            // Uncomment the following line to prevent default and show a custom modal instead
            // e.preventDefault();
        });
    });

    // Table row hover effects
    const tableRows = document.querySelectorAll('.features-table tr, .android-table tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(108, 99, 255, 0.05)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });

    // Prevent image downloads
    const protectedImages = document.querySelectorAll('.protected-image');
    
    protectedImages.forEach(img => {
        // Prevent right-click
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
        
        // Prevent drag
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
        
        // Prevent selection
        img.addEventListener('selectstart', function(e) {
            e.preventDefault();
            return false;
        });
    });

    // Add additional protection to the entire document
    document.addEventListener('keydown', function(e) {
        // Prevent print screen and save page shortcuts
        if (
            (e.ctrlKey && e.key === 'p') || 
            (e.ctrlKey && e.key === 's') ||
            (e.key === 'PrintScreen')
        ) {
            e.preventDefault();
            return false;
        }
    });

    // Preload images for better performance
    function preloadImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            const src = img.getAttribute('src');
            if (src) {
                const newImg = new Image();
                newImg.src = src;
            }
        });
    }
    
    preloadImages();
});

lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/notfound.json' // Ganti dengan path file JSON kamu
  });
  
  function showSuccess(text) {
  const container = document.getElementById('success');
  const lottieContainer = document.getElementById('success-lottie');
  const textContainer = document.getElementById('success-text');

  textContainer.textContent = text;
  container.style.display = 'block';
  container.style.animation = 'animate__animated animate__fadeInUp';
  // Hapus animasi lama jika ada
  lottieContainer.innerHTML = '';

  // Tampilkan animasi sukses
  lottie.loadAnimation({
    container: lottieContainer,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'animation/success.json' // animasi centang sukses
  });

  setTimeout(() => {
    container.style.display = 'none';
  }, 4000);
}

function showFailed(text) {
  const container = document.getElementById('failed');
  const lottieContainer = document.getElementById('failed-lottie');
  const textContainer = document.getElementById('failed-text');

  textContainer.textContent = text;
  container.style.display = 'block';
  container.style.animation = 'animate__animated animate__fadeInUp';

  // Hapus animasi lama jika ada
  lottieContainer.innerHTML = '';

  // Tampilkan animasi gagal
  lottie.loadAnimation({
    container: lottieContainer,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'animation/error.json' // animasi silang merah
  });

  setTimeout(() => {
    container.style.display = 'none';
  }, 4000);
}
  
  
    let isOpen = false;
    const productsData = [
        {
            id: "surxrat-v1.4-s35",
            image: "img/produk/surxrat_publik.jpg",
            name: "SURXRAT V1.4 S35",
            price: 25000,
            description: "<strong>Surxrat </strong>Pengontrol perangkat Android dari jarak jauh secara real time menggunakan teknologi canggih yang dirancang untuk kemudahan dan keamanan maksimal.",
            paymentMethods: {
                dana: "087714144188",
                gopay: "087714144188",
                whatsapp: "085857636560"
            },
            whatsappLink: "website/surxratPreview/index.html",
            isPopular: true,
            benefits: "✅ Support All Android.<br>✅ Harga terjangkau mulai dari Rp25.000 saja.<br>✅ Mendukung fitur kontrol perangkat seperti file manager dan command.<br>✅Cocok untuk edukasi atau kontrol perangkat anak atau teman.<br>✅ Disertai panduan lengkap tentang cara penggunaan."
        },
        {
          id: "pembuatan-website",
          image: "img/produk/jasa_pembuatan_website.jpg",
          name: "Jasa Pembuatan Website",
          price: 20000,
          description: "<strong>Jasa Pembuatan Website</strong>adalah layanan profesional untuk membuat situs web custom yang menarik, responsif, dan mudah digunakan.",
          paymentMethods: {
                dana: "085828632336",
                gopay: "089653927785",
                whatsapp: "085857636560"
            },
          whatsappLink: "https://wa.me/6285857636560?text=Saya%20Ingin%20Menyewa%20Jasa%20Pembuatan%20Website%20Dengan%20Harga%220.000",
          isPopular: true,
          isFree: false,
          benefits: "✅ Desain profesional dan responsif di semua perangkat<br>✅ Proses cepat dan dukungan penuh dari tim Yoyzz<br>✅ Website Responsif & Informatif<br>✅ Mobile friendly dan mudah dikelola<br>✅ Bisa custom sesuai kebutuhan bisnis atau personal"
        },
        {
            id: "ransomware",
            image: "img/produk/ransomware.jpg",
            name: "RANSOMWARE",
            price: 10000,
            description: "Ransomware LockScreen adalah aplikasi ransomware jenis screen locker jenis malware yang mengunci tampilan layar pengguna sehingga mereka tidak dapat mengakses aplikasi.",
            paymentMethods: {
                dana: "085828632336",
                gopay: "089653927785",
                whatsapp: "085857636560"
            },
            whatsappLink: "https://wa.me/6285857636560?text=Saya%20ingin%20membeli%20RANSOMWARE%20seharga%20Rp%2010.000",
            isPopular: true,
            benefits: "✅ Kunci Ponsel Korban<br>✅ Cocok untuk pentester, tim keamanan, dan edukasi profesional<br>✅ Disertai panduan Lengkap tentang cara penggunaan ransomware<br>✅ Bisa request kata kunci<br>✅ Kunci perangkat korban"
        },
        {
          id: "web-spy",
          image: "img/produk/web_spy.jpg",
          name: "Web Spy Pro",
          price: 5000,
          description: "<strong>Web Spy Pro</strong> adalah alat untuk mengambil elemen-elemen penting dari situs web, seperti HTML, CSS, JavaScript, dan file gambar yang di-import langsung dari halaman.",
          paymentMethods: {
                dana: "085828632336",
                gopay: "089653927785",
                whatsapp: "085857636560"
            },
          whatsappLink: "https://wa.me/6285857636560?text=Saya%20Ingin%20Membeli%20Web%20Spy%20Pro%20Dengan%20Harga%205.000",
          isPopular: true,
          isFree: false,
          benefits: "✅ Ekstrak struktur HTML lengkap dari halaman web<br>✅ Unduh file CSS dan JavaScript eksternal dengan mudah<br>✅ Ambil gambar dan file media yang diimport dari HTML<br>✅ Cocok untuk developer, pelajar, dan peneliti keamanan<br>✅ Interface simpel, tinggal tempel dan download/simpan"
        },
{
  id: "web-spy",
  image: "img/produk/reseller_web_spy.jpg",
  name: "Reseller Web Spy Pro",
  price: 10000,
  description: "<strong>Reseller Web Spy Pro</strong> adalah program kemitraan resmi dari Yoyzz yang memungkinkan Anda untuk membuat akun Web Spy dan menjualnya kembali ke pengguna lain. Cocok untuk Anda yang ingin memulai bisnis digital dengan produk yang sudah terbukti dibutuhkan.",
  paymentMethods: {
    dana: "085828632336",
    gopay: "089653927785",
    whatsapp: "085857636560"
  },
  whatsappLink: "https://wa.me/6285857636560?text=Saya%20Ingin%20Membeli%20Reseller%20Web%20Spy%20Pro%20Dengan%20Harga%2010.000",
  isPopular: false,
  isFree: false,
  benefits: "✅ Bisa membuat dan membagikan akun Web Spy<br>✅ Bebas atur harga jual dan keuntungan<br>✅ Tanpa stok atau pengiriman fisik<br>✅ Sistem simpel dan mudah dijalankan<br>✅ Dukungan langsung dari tim Yoyzz"
},
        {
          id: "phising-website",
          image: "img/produk/phising_website.jpg",
          name: "Phising Website",
          price: 5000,
          description: "<strong>Phising Website</strong> adalah metode pencurian data dengan menyamar sebagai situs asli. Saat korban mengklik URL palsu, data seperti lokasi, perangkat, dan info pribadi bisa dikumpulkan tanpa disadari.",
          paymentMethods: {
                dana: "085828632336",
                gopay: "089653927785",
                whatsapp: "085857636560"
            },
          whatsappLink: "https://wa.me/6285857636560?text=Saya%20Ingin%20Membeli%20Phising%20Website%20dengan%20Harga%205.000",
          isPopular: false,
          isFree: false,
          benefits: "✅ Mengumpulkan informasi perangkat korban hanya dengan klik URL<br>✅ Dapat mendeteksi lokasi, kamera, jenis perangkat, user agent, dan baterai<br>✅ Menangkap detail seperti kode pos, IP publik, dan sistem operasi<br>✅ Cocok untuk edukasi keamanan siber dan uji coba simulasi phising<br>✅ Didukung tampilan web yang menarik dan responsif"
        },
        {
          id: "nokos",
          image: "img/produk/nokos.jpg",
          name: "Nomor Kosong (Nokos)",
          price: 5000,
          description: "<strong>Nokos</strong> adalah Nomor yang sudah kosong dan tidak lagi dimiliki oleh seseorang biasanya nokos digunakan sebagai nomor ke 2 atau nomor bot whatsapp",
          paymentMethods: {
                dana: "085828632336",
                gopay: "089653927785",
                whatsapp: "085857636560"
            },
          whatsappLink: "https://wa.me/6285857636560?text=Saya%20Ingin%20Membeli%20Nokos%20Indo",
          isPopular: false,
          isFree: false,
          benefits: "✅ Dapat digunakan untuk verifikasi akun sementara<br>✅ Cocok dijadikan nomor bot whatsapp<br>✅ Praktis tanpa perlu beli kartu fisik<br>✅ Privasi terjaga, cocok untuk kebutuhan sementara<br>✅ Proses cepat dan langsung siap pakai"
        },
        {
            id: "javascript-obfuscator",
            image: "img/produk/encrypt_website.jpg",
            name: "Javascript Obfucator",
            price: 0,
            description: "JavaScript Obfuscator adalah alat untuk mengubah kode <strong>Javascript</strong> menjadi bentuk yang sulit dibaca dan dimengerti, tanpa mengubah fungsinya. Ini berguna untuk melindungi kode dari pencurian, pembajakan, dan modifikasi tidak sah.",
            paymentMethods: {
                dana: "085828632336",
                gopay: "089653927785",
                whatsapp: "085857636560"
            },
            whatsappLink: "https://javascript-obfuscator-delta.vercel.app/",
            isPopular: false,
            isFree: true,
            benefits: "✅ Mengacak kode JavaScript agar sulit dibaca dan dimodifikasi<br>✅ Melindungi logika bisnis dari pencurian atau pembajakan<br>✅ Mendukung berbagai teknik obfuscation (string encode, control flow, dll)<br>✅ Cocok untuk developer yang ingin melindungi source code<br>✅ Mudah digunakan dan hasil tetap bisa dijalankan normal"
        },
        {
            id: "rename-tool",
            image: "img/produk/web_rename.jpg",
            name: "Rename Tool",
            price: 0,
            description: "<strong>Rename Tool</strong> adalah alat online untuk mengganti nama dan identitas dalam skrip bot WhatsApp. Cocok untuk rebranding atau personalisasi tanpa mengubah fungsi utama bot.",
            paymentMethods: {
                dana: "085828632336",
                gopay: "089653927785",
                whatsapp: "085857636560"
            },
            whatsappLink: "https://renamerscript.glitch.me",
            isPopular: false,
            isFree: true,
            benefits: "✅ Ganti nama owner, nama bot, footer, dan teks lainnya dengan cepat & <strong>gratis</strong><br>✅ Mendukung file script.js, config.js, dan sejenisnya<br>✅ Tidak perlu edit manual, cukup input data baru<br>✅ Praktis untuk personalisasi atau rebranding bot WhatsApp<br>✅ Cocok untuk pemula maupun pengembang lanjutan"
        }
    ];
    
function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.dataset.name = product.id;

    let badge = '';
    if (product.isPopular) {
        badge = '<span class="badge">Popular</span>';
    }

    const buttonText = product.price === 0 ? 'VISIT SITE' : 'Bayar Sekarang';
    const buttonIcon = product.price === 0 ? '' : '<img src="img/globe.svg" alt="globe" class="whatsapp-icon">';

    productElement.innerHTML = `
    ${badge}
    <div class="product-content animate__animated animate__fadeInUp">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2 class="product-title">${product.name}</h2>
        <p class="price">${product.price === 0 ? 'Rp 0' : `Rp ${product.price.toLocaleString('id-ID')}`}</p>
        <p class="product-description">${product.description}</p>
        
        <div class="payment-methods">
            <p>Pembayaran:</p>
            <ul>
                <li>DANA: ${product.paymentMethods.dana}</li>
                <li>GOPAY: ${product.paymentMethods.gopay}</li>
                <li>WHATSAPP: ${product.paymentMethods.whatsapp}</li>
            </ul>
        </div>
    </div>
    <div class="product-footer">
        <button class="pay-button" onclick="showConfirmationModal('${product.name.replace(/'/g, "\\'")}', ${product.price}, '${product.whatsappLink}')">
            ${buttonIcon} ${buttonText}
        </button>
        <button class="pay-button" onclick="openBenefit('${product.name.replace(/'/g, "\\'")}', '${product.benefits.replace(/'/g, "\\'")}')">Benefit</button>
    </div>
`;

    return productElement;
}

function renderProducts() {
  const popularContainer = document.getElementById('products-popular');
  const freeContainer = document.getElementById('products-free');
  const regularContainer = document.getElementById('products-regular');

  // Kosongkan semua container
  popularContainer.innerHTML = '';
  freeContainer.innerHTML = '';
  regularContainer.innerHTML = '';

  // Buat judul jika belum ada
  if (!document.querySelector('.section-title-popular')) {
    popularTitle.className = 'section-title section-title-popular';
    popularTitle.textContent = 'Produk Populer 🔥';
    popularContainer.parentNode.insertBefore(popularTitle, popularContainer);
  }

  if (!document.querySelector('.section-title-free')) {
    
    freeTitle.className = 'section-title section-title-free';
    freeTitle.textContent = 'Produk Gratis';
    freeContainer.parentNode.insertBefore(freeTitle, freeContainer);
  }

  if (!document.querySelector('.section-title-regular')) {
    
    regularTitle.className = 'section-title section-title-regular';
    regularTitle.textContent = 'Produk Lainnya';
    regularContainer.parentNode.insertBefore(regularTitle, regularContainer);
  }

  // Render produk ke container sesuai kategori
  productsData.forEach(product => {
    const productElement = createProductElement(product);

    if (product.isPopular) {
      popularContainer.appendChild(productElement);
    } else if (product.isFree || product.price === 0) {
      freeContainer.appendChild(productElement);
    } else {
      regularContainer.appendChild(productElement);
    }
  });
}

    // Benefit Modal Functions
    function openBenefit(productName, benefits) {
    document.getElementById('benefit-product').innerHTML = `
        <div style="text-align: center;"><strong>${productName}</strong></div><br>
        <div style="text-align: left;">${benefits}</div>
    `;
    document.getElementById('benefit-modal').style.display = 'flex';
}

    function closeBenefit() {
        document.getElementById('benefit-modal').style.display = 'none';
    }

    // Existing functions remain the same
    const taglineText = "Temukan produk digital terbaik disini.";
    const typingElement = document.getElementById('typing-text');
    const skipBtn = document.getElementById('skip-btn');
    let typingSpeed = 50;
    
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    
    function closeSidebar() {
        document.getElementById("sidebar").classList.remove("sidebar-open");
        document.getElementById("main-content").classList.remove("blurred");
        document.getElementById("overlay").style.display = "none";

        if (window.history.state === "sidebar-open") {
            history.back();
        }
    }

    function openInformation() {
      const info = document.getElementById("info");
      
      if (isOpen) {
        info.style.display = "none";
      } else {
        info.style.display = "block";
      }

      isOpen = !isOpen;
    }

    function toggleSidebar() {
        const isOpen = sidebar.classList.contains('sidebar-open');

        if (!isOpen) {
            sidebar.classList.add('sidebar-open');
            mainContent.classList.add('blurred');

            history.pushState({ sidebarOpen: true }, '');
        } else {
            sidebar.classList.remove('sidebar-open');
            mainContent.classList.remove('blurred');

            if (history.state && history.state.sidebarOpen) {
                history.back();
            }
        }
    }

    window.addEventListener('popstate', function (event) {
        if (sidebar.classList.contains('sidebar-open')) {
            sidebar.classList.remove('sidebar-open');
            mainContent.classList.remove('blurred');
        }
    });
    
    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            typingElement.innerHTML = text.substring(0, i+1);
            setTimeout(function() { typeWriter(text, i + 1, fnCallback) }, typingSpeed);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 1000);
        }
    }
    
    function startTyping() {
        typeWriter(taglineText, 0, function() {
            skipBtn.style.display = 'none';
        });
    }
    
    skipBtn.addEventListener('click', function() {
        typingSpeed = 0;
        typingElement.innerHTML = taglineText;
        skipBtn.style.display = 'none';
    });
    
    const searchInput = document.getElementById('search-input');
    const noResults = document.getElementById('no-results');
    
    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let hasResults = false;
        const products = document.querySelectorAll('.product');
        
        products.forEach(product => {
            const productName = product.getAttribute('data-name').toLowerCase();
            const productTitle = product.querySelector('.product-title').textContent.toLowerCase();
            const productDesc = product.querySelector('p:not(.price)')?.textContent.toLowerCase() || '';
            
            if (productName.includes(searchTerm) || 
                productTitle.includes(searchTerm) || 
                productDesc.includes(searchTerm)) {
                product.style.display = 'block';
                hasResults = true;
            } else {
                product.style.display = 'none';
                popularTitle.style.display = 'none';
                regularTitle.style.display = 'none';
                freeTitle.style.display = 'none';
            }
        });
        
        noResults.style.display = hasResults ? 'none' : 'block';
    }
    
    searchInput.addEventListener('input', handleSearch);

    document.querySelector('.search-icon').addEventListener('click', function() {
        searchInput.value = '';
        handleSearch();
    });
    
    let currentPaymentUrl = '';
    
    function showConfirmationModal(productName, price, paymentUrl) {
        currentPaymentUrl = paymentUrl;
        const modal = document.getElementById('confirmation-modal');
        document.getElementById('modal-product-name').textContent = productName;
        document.getElementById('modal-price').textContent = `Rp ${price.toLocaleString('id-ID')}`;
        modal.style.display = 'flex';
        
        const confirmBtn = document.getElementById('confirm-payment-btn');
        confirmBtn.onclick = function() {
            window.location.href = currentPaymentUrl;
        };
    }
    
    function closeModal() {
        document.getElementById('confirmation-modal').style.display = 'none';
        const info = document.getElementById("info");
        info.style.display = "none";
    }
    
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('confirmation-modal');
        if (event.target === modal) {
            closeModal();
        }
        
        const benefitModal = document.getElementById('benefit-modal');
        if (event.target === benefitModal) {
            closeBenefit();
        }
    });
    
document.querySelector('.report-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.querySelector('input[placeholder="Nama Kamu"]').value.trim();
  const email = this.querySelector('input[placeholder="Email Aktif"]').value.trim();
  const message = this.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    showFailed('Mohon isi semua kolom sebelum mengirim.');
    return;
  }

  // 🔒 Validasi isi laporan anti deface/script
  const lowerMsg = message.toLowerCase();
  const blacklist = ['<script', '</script', '<iframe', '</iframe', 'onerror', 'onload', 'javascript:', '<img', '<svg', 'style='];

  for (const bad of blacklist) {
    if (lowerMsg.includes(bad)) {
      showFailed('Hayoo mau ngapain😹');
      return;
    }
  }

  // 🧼 Escape karakter berbahaya
  const safeText = (text) =>
    text.replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

  const safeName = safeText(name);
  const safeEmail = safeText(email);
  const safeMessage = safeText(message);

  const telegramToken = '7138157401:AAF9G6HmVk6iiTweXrBm1AS1jqZ7pdyLoDg';
  const chatId = '7822932083';

  const text = `
📢 *LAPORAN MASUK!*

👤 *Nama:* ${safeName}
📧 *Email:* ${safeEmail}
📝 *Pesan:* ${safeMessage}
`.trim();

  fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'Markdown'
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.ok) {
      showSuccess('✅ Laporan berhasil dikirim!');
      this.reset();
    } else {
      showFailed('❌ Gagal mengirim laporan. Coba lagi.');
      console.error(data);
    }
  })
  .catch(err => {
    showFailed('❌ Terjadi kesalahan saat mengirim.');
    console.error(err);
  });
});
    
    document.addEventListener('DOMContentLoaded', function() {
        renderProducts();
        startTyping();
    });