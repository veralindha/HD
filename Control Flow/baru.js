function hitung() {
    //campuran pengulangan for dan if
    var bilangan;
    var bil;
    bilangan = prompt("masukan nilai");
    bil = parseInt(bilangan);
    for (var baru = 1; baru <= bil; baru++) {
        var mod = void 0;
        mod = baru % 3;
        if (mod == 0) {
            console.log(baru + "habis dibagi 3");
        }
        else {
            console.log(baru + "tidak habis dibagi 3");
        }
    }
}
