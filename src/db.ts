import { EntityManager, getManager } from 'typeorm';

export async function createOne(instance) {
  try {
    return await getManager().save(instance)
  } catch (error) {
    // tslint:disable-next-line no-console
    console.log(error)
  }
}