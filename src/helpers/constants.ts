export const ROUTES = {
  GRID: "/",
  GRID_ITEM: "/gridItem/:imageId",
  getGridItemPath: (id: string | number) => `/gridItem/${id}`,
};

export const UI_TEXT = {
  LOAD_MORE: 'Load more',
  BACK_BUTTON: "🔙 Go Back",
  LOADING: "Loading ⟳⟳⟳",
}
