class Bapak {
  constructor(name, karakter, pendidikan) {
    this.name = name;
    this.karakterName = karakter;
    this._pendidikan = pendidikan;
  }

  karakter() {
    return `karakternya adalah ${this.karakterName}`;
  }
}

class Anak extends Bapak {
  constructor(name, karakter, pendidikan, usia) {
    super(name, karakter, pendidikan)
    this.usia = usia;
  }
  newKarakter() {
    return `${this.name} ${super.karakter()} usianya ${this.usia} pendidikan sekarang ${this._pendidikan}` ;
  }
}

// const manusia = new Bapak("", "lucu").karakter();
const anakManusia = new Anak("lili", "lucu", "TK", 21).newKarakter();
console.log(anakManusia);
