export const filterData = (searchText, restaurent) => {
    const filteredData =restaurent.filter((restaurent) =>
      restaurent?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    return filteredData
    };