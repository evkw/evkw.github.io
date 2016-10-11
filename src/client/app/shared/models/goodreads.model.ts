export interface GoodReadsReview {
    id: string;
    book: Book;
}

export interface Book {
    id: any;
    isbn: string;
    isbn13: string;
    text_reviews_count: any;
    title: string;
    image_url: string;
    link: string;
}

export class BookModel {
    title: string;
    image_url: string;
    link: string;

    constructor(review: GoodReadsReview) {
        this.title = review.book.title;
        this.image_url = review.book.image_url;
        this.link = review.book.link;
    }
}
