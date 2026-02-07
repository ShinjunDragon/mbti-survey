export interface QuestionType {
    id : number;
    question : string;
    answers : {
        text :string;
        type: string;
    }[];
}

export interface MbtiResultType {
    mbti : string;
    name: string;
    description: string;
    image: string;
}