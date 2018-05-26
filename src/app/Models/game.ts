export class Game {
    GameId: number;
    Title: string;

    constructor(title: string) {
        this.Title = title;
    }
}





// public partial class Game
//     {
//         public Game()
//         {
//             Library = new HashSet<Library>();
//         }

//         public int GameId { get; set; }
//         public string Title { get; set; }

//         public ICollection<Library> Library { get; set; }
//     }