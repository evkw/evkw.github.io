export interface Profile {
    user: CodeSchoolUser;
    courses: Courses;
    badges: Badge[];
}

export interface CodeSchoolUser {
    username: string;
    member_since: Date;
    total_score: number;
    avatar: string;
}

export interface Courses {
    complete: Course[];
    in_progress: Course[];
}

export interface Course {
    title: string;
    url: string;
    badge: string;
}

export interface Badge {
    name: string;
    badge: string;
    course_url: string;
}