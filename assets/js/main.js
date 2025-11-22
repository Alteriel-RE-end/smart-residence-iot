// File ini akan dipanggil di SETIAP halaman HTML

// 1. Fungsi Render Navbar Otomatis
export function initNavbar(activePage) {
    const navbarHTML = `
    <nav class="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <i class="fa-solid fa-network-wired text-slate-800 text-xl mr-3"></i>
                    <a href="index.html" class="font-bold text-xl tracking-tight text-slate-900 hover:text-slate-700">
                        SmartRes<span class="text-slate-400">IoT</span>
                    </a>
                </div>
                <div class="hidden md:flex items-center space-x-4">
                    <a href="index.html" class="${activePage === 'dashboard' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'} px-3 py-2 rounded-md text-sm font-medium transition">
                        Dashboard
                    </a>
                    <a href="kamar1.html" class="${activePage === 'kamar1' ? 'bg-slate-800 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'} px-3 py-2 rounded-md text-sm font-medium transition flex items-center">
                        <i class="fa-solid fa-shield-halved mr-2 ${activePage === 'kamar1' ? 'text-emerald-400' : ''}"></i> Kamar 1
                    </a>
                    <a href="villa1.html" class="${activePage === 'villa1' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'} px-3 py-2 rounded-md text-sm font-medium transition">
                        Villa 1
                    </a>
                    <a href="villa2.html" class="${activePage === 'villa2' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'} px-3 py-2 rounded-md text-sm font-medium transition">
                        Villa 2
                    </a>
                    <a href="manage.html" class="${activePage === 'manage' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'} px-3 py-2 rounded-md text-sm font-medium transition">
                        <i class="fa-solid fa-id-card mr-1"></i> Kartu
                    </a>
                </div>
            </div>
        </div>
    </nav>
    
    <!-- Container Global Alert (Akan diisi JS jika ada bahaya) -->
    <div id="global-alert" class="alert-hidden fixed top-0 left-0 w-full shadow-md"></div>
    `;

    // Inject ke elemen dengan ID 'navbar-container' di HTML
    const container = document.getElementById('navbar-container');
    if (container) {
        container.innerHTML = navbarHTML;
    }
}

// 2. Fungsi Format Waktu (Untuk Sumbu X Grafik)
// Mengubah timestamp menjadi "HH:MM"
export function formatTime(dateString) {
    const d = new Date(dateString);
    return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
}

// 3. Fungsi Helper Angka (Agar ada pemisah ribuan: 1.200 Watt)
export function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}