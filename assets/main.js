function checkKhodam(event){
    event.preventDefault();
    let nama = $('#search').val();
    // alert("Testing");
    if (nama === '') {
        alert('Nama tidak boleh kosong!')
    } else {
        let status = [
            'isi',
            'kosong'
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus == 0) {
            let khodam = [
                'Mio Karbu',
                'Lele Terbang',
                'Kecoa Bunting',
                'Pajero Cumi-cumi',
                'Panci Bolong',
                'Celana Jeans Robek Gede',
                'Siput Jalan Cepat'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Koding Kamu (${khodam[random]})`);
            $('#search').val('');
        } else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
            $('#search').val('');
        }
    }
}

$(document).ready(function (){
    $('#btn-search').click(checkKhodam);
})