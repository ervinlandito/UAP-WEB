function pembelian() {

    const kodeBarangInput = document.getElementById('kodeBarang').value;
    const jumlahBarangInput = parseInt(document.getElementById('jumlahBarang').value);
  
    let totalHarga = 0;
    const barangTerpilih = barangList.find(barang => barang.kode === kodeBarangInput);
    if (barangTerpilih) {
      totalHarga = barangTerpilih.harga * jumlahBarangInput;
    } else {
      alert('Kode barang tidak valid!');
      return;
    }

    alert(`Total pembayaran adalah: ${totalHarga}`);
  

    const uangDibayar = parseFloat(prompt('Masukkan jumlah uang:'));
  

    if (uangDibayar >= totalHarga) {
      const kembalian = uangDibayar - totalHarga;
      alert(`Total kembalian anda adalah: ${kembalian}`);
    } else {
      const kekurangan = totalHarga - uangDibayar;
      alert(`Uang anda kurang ${kekurangan}.`);
    }
}
  