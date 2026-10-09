
/* FITUR PESAN MENU KOPI SENJA */

const tombolPesan = document.querySelectorAll(".order-btn");

tombolPesan.forEach(function (tombol) {
    tombol.addEventListener("click", function (event) {
        event.preventDefault();

        const namaMenu = tombol.dataset.menu;
        const hargaMenu = Number(tombol.dataset.harga);

        const hargaFormat = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }).format(hargaMenu);

        const konfirmasi = confirm(
            "Pesanan kamu:\n" +
            namaMenu + "\n" +
            "Harga: " + hargaFormat + "\n\n" +
            "Lanjutkan pemesanan melalui WhatsApp?"
        );

        if (konfirmasi) {
        
            const nomorWhatsApp = "089876545456";

            const pesan = encodeURIComponent(
                "Halo Kopi Senja, saya ingin memesan:\n" +
                namaMenu + "\n" +
                "Harga: " + hargaFormat
            );

            const linkWhatsApp =
                "https://wa.me/" + nomorWhatsApp + "?text=" + pesan;

            window.open(linkWhatsApp, "_blank");
        }
    });
});