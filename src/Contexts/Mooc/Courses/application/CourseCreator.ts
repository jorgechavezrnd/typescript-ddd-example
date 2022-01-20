import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';
import { CreateCourseRequest } from './CreateCourseRequest';
import { CourseName } from '../domain/CourseName';
import { CourseId } from '../../Shared/domain/Courses/CourseId';
import { CourseDuration } from '../domain/CourseDuration';

export class CourseCreator {
  private readonly repository: CourseRepository;

  constructor(repository: CourseRepository) {
    this.repository = repository;
  }

  async run(request: CreateCourseRequest): Promise<void> {
    const course = new Course({
      id: new CourseId(request.id),
      name: new CourseName(request.name),
      duration: new CourseDuration(request.duration)
    });

    return await this.repository.save(course);
  }
}
