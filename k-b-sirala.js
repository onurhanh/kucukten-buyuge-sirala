function siralaDizi(numbers) {
    return numbers.sort((a, b) => a - b);
}

const sayilar = [61, 48, 99, 1, 3, 31];
const siraliSayilar = siralaDizi(sayilar);
console.log(siraliSayilar);
