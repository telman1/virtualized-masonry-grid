export const ROUTES = {
  GRID: "/",
  GRID_ITEM: "/gridItem/:imageId",
  getGridItemPath: (id: string | number) => `/gridItem/${id}`,
};

export const UI_TEXT = {
  VIRTUALIZED_MASONRY_GRID: 'Virtualized Masonry Grid',
  LOAD_MORE: 'Load more',
  BACK_BUTTON: "🔙 Go Back",
  LOADING: "Loading ⟳⟳⟳",
  PHOTOGRAPHER: "Photographer",
  NO_DATA: "No Data Found",
  ADJUST_SEARCH: "Try adjusting your search",
  SEARCH_BY_PHOTOGRAPHER: "Search by photographer",
}
