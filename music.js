class Music{
    constructor(title, singer, img, file){
        this.title=title;
        this.singer=singer;
        this.img=img;
        this.file=file;
    }

    getName(){
        return this.title + " - " + this.singer;
    }
}

const MusicList = [
    new Music('Boşver', 'Nilüfer', '1.jpeg', '.mp3'),
    new Music('Bu da Geçermi Sevgilim', 'Yalın', '2.jpeg', '2.mp3'),
    new Music('Aramızda Uçurumlar', 'Suat Suna', '3.jpeg', '3.mp3')

];


