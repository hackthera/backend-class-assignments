export interface Student {
  id: number;
  name: string;
  grades: Record<string, number>;
  enrolledAt: Date;
  gpa?: number;
}

export const students: Student[] = [];