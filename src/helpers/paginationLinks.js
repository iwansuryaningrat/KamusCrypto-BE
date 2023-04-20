const paginationLinks = (page, limit, link, dataCount) => {
  const nextpage = dataCount.pageCount > page ? page + 1 : null;
  const prevpage = page > 1 ? page - 1 : null;
  const lastpage = dataCount.pageCount;
  const firstpage = 1;
  const currentPage = page;

  const nextlink = nextpage ? `${link}?page=${nextpage}&limit=${limit}` : null;
  const prevlink = prevpage ? `${link}?page=${prevpage}&limit=${limit}` : null;
  const lastlink = `${link}?page=${lastpage}&limit=${limit}`;
  const firstlink = `${link}?page=${firstpage}&limit=${limit}`;

  const pagination = {
    currentPage: parseInt(currentPage),
    totalPages: dataCount.pageCount,
    dataPerPage: parseInt(dataCount.dataPerPage),
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
