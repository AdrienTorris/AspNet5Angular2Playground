export class BlogPost {
    public id: string;
    public title: string;
    public content: string;
    public author: string;
    public authorMail: string;
    public category: number;

    constructor() {
    }
}

export class BlogCategory {
    public id: number;
    public name: string;
    public description: string;
}