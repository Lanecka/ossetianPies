import { createSlice } from "@reduxjs/toolkit"

/** Состояние по умолчанию */
const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'Популярности (desk)',
    sortProperty: 'popular'
  }
}

const filterSlice = createSlice({
  name: 'filters',  // название
  initialState,     // состояние по умолчанию
  reducers: {       // передаем наши действия
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setFilters(state, action) {
      state.sort = action.payload.sort
      state.currentPage = Number(action.payload.currentPage) 
      state.categoryId = Number(action.payload.categoryId) 
    }
  }
})

/* экспортируем действия */
export const { setCategoryId, setSort, setCurrentPage, setFilters } = filterSlice.actions;
/* экспортируем reducer */
export default filterSlice.reducer;