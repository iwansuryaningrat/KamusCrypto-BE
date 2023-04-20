const paginationLinks = (page, pageLimit, link, dataCount) => {
  const nextpage = dataCount.pageCount > page ? page + 1 : null;
  const prevpage = page > 1 ? page - 1 : null;
  const lastpage = dataCount.pageCount;
  const firstpage = 1;
  const currentPage = page;

  const nextlink = nextpage
    ? `${link}?page=${nextpage}&limit=${pageLimit}`
    : null;
  const prevlink = prevpage
    ? `${link}?page=${prevpage}&limit=${pageLimit}`
    : null;
  const lastlink = `${link}?page=${lastpage}&limit=${pageLimit}`;
  const firstlink = `${link}?page=${firstpage}&limit=${pageLimit}`;

  const pagination = {
    currentPage,
    totalPages: dataCount.pageCount,
    dataPerPage: pageLimit,
    totalDatas: dataCount.dataCount,
    links: {
      next: nextlink,
      prev: prevlink,
      last: lastlink,
      first: firstlink,
    },
  };

  return pagination;
};

export default paginationLinks;
