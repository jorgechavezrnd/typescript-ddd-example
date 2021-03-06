import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository';
import { CourseMother } from '../../domain/CourseMother';

describe('FileCourseRepository', () => {
  it('should save a course', async () => {
    const repository = new FileCourseRepository();
    const course = CourseMother.random();

    await repository.save(course);
  });
});
