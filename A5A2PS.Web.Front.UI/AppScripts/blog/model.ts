/**
 * Blog post's model
 */
export class BlogPost {
    /**
    * Post's identifier (Guid)
    */
    public id: string;
    public title: string;
    public content: string;
    public author: string;
    public authorMail: string;
    public category: number;

    constructor() {
    }
}

/**
 * Model of a blog's category for grouping posts
 */
export class BlogCategory {
    public id: number;
    public name: string;
    public description: string;

    //constructor() {
    //}

    constructor(id: number, name: string, desc: string) {
        this.id = id;
        this.name = name;
        this.description = desc;
    }
}