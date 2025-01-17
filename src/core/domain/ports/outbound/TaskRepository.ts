import { BaseRepository } from './BaseRepository';
import { Task } from '../../entities/Task';

export interface TaskRepository extends BaseRepository<Task> {
  getByUserAssigned(userUUID: string): Promise<Task[] | []>;
}
