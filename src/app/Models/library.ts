export class Library {
    LibraryId: number;
    GameId: number;
    PersonId: number;

    constructor(gameId: number, personId: number) {
        this.GameId = gameId;
        this.PersonId = personId;
    }
}