import { chain, isEmpty, isNumber, isNil } from 'lodash'

export const lifestyleFiltersToApi = activeFilters => {
  const filters = Object.assign({}, activeFilters);
  filters.sortBy = filters.sortBy.value
  const cleanedFilters = chain(filters)
    .omitBy(isNil || (isEmpty && !isNumber))
    .omitBy(o => o.length === 0)
    .omitBy(o => o === 0)
    .value()
    cleanedFilters._page = cleanedFilters.page
    delete cleanedFilters.page
    cleanedFilters._limit=9
  return cleanedFilters;
}