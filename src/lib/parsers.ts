export function parseUndefinedPayload(props) {
  return Object.entries(props)
    .reduce((acc, [key, value]) => {
      if (!value) return acc

      return { ...acc, [key]: value }
    }, {})
}

/**
 * Parses the query object for accepted relations from filter
 * @param query Hapi Request.query object
 * @param filter An object with mapping relation:bool
 */
export function parseRelationsFromQuery(query, filter) {
  const { relations } = query
  if (!relations) return undefined

  const rel = [].concat(relations)

  return rel.filter(relation => filter[relation])
}