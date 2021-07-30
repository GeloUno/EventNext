
export interface IComment {
    id: string,
    eventId: string,
    email: string;
    name: string;
    text: string;
}
export interface INewComment extends Omit<IComment, "id"> {
}

