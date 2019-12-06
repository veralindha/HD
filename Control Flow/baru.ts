function hitung(){
//campuran pengulangan for dan if
   let bilangan: string;
   let bil : number;
   bilangan = prompt("masukan nilai");
   bil= parseInt(bilangan)

   for (let baru=1; baru<= bil; baru++){
       let mod: number;
       mod= baru%3
       if(mod == 0){
           console.log(baru +"habis dibagi 3");
       }else{
           console.log(baru +"tidak habis dibagi 3");
       }
   }
}