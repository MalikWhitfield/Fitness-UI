import { ExerciseType } from "./enums/ExerciseType";
import { MuscleGroup } from "./enums/MuscleGroup";

export interface Exercse {
  id: string;
  name: string;
  description: string;
  exerciseType: ExerciseType;
  muscleGroup: MuscleGroup;
}
