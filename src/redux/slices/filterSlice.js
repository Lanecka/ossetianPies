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
    }
  }
})

/* экспортируем действия */
export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions;
/* экспортируем reducer */
export default filterSlice.reducer;