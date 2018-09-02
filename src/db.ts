import { getManager, getConnection } from 'typeorm';

export async function createOne(instance) {
  try {
    return await getManager().save(instance)
  } catch (error) {
    // tslint:disable-next-line no-console
    console.log(error)
  }
}

export async function getOne(Model, id, relations) {
  try {
    return await getManager().findOne(Model, id, { relations })
  } catch (error) {
    // tslint:disable-next-line no-console
    console.log(error)
  }
}

export async function getOneWithRelations(Model, id, relations) {
  try {
    return await getManager().findOne(Model, id, { relations })
  } catch (error) {
    // tslint:disable-next-line no-console
    console.log(error)
  }
}


export async function updateOne(Model, id, instance) {
  try {
    return await getManager().update(Model, id, instance)
  } catch (error) {
    // tslint:disable-next-line no-console
    console.log(error)

  }
}

export async function bindModelOneToMany(Model, relation, modelId, relationId) {
  try {
   return await getConnection()
    .createQueryBuilder()
    .relation(Model, relation)
    .of(modelId)
    .set(relationId)   
  } catch (error) {
    // tslint:disable-next-line no-console
    console.log(error)
  }

}