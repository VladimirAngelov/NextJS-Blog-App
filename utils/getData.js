export default () => {
  return fetch("https://api.unsplash.com/search/photos?page=1&per_page=30&query=cars&client_id=TxOUMe8taR-ccdITmX45TdBjXnCRUhbLxM_klTjQhBM")
    .then(res => res.json())
}

export const getSinglePhoto = (id) => {
  return fetch(`https://api.unsplash.com/photos/${id.toString()}?client_id=TxOUMe8taR-ccdITmX45TdBjXnCRUhbLxM_klTjQhBM`)
    .then(res => res.json())
}
// get 30 results than count the pages -> 30 / 5 and load only 5 posts per page on home screen
// && slice the data from mobile carousel