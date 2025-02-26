export const getLinks = () => {
    return JSON.parse(localStorage.getItem("links")) || [];
  };
  
  export const saveLink = (url, description) => {
    const links = getLinks();
    links.push({ url, description });
    localStorage.setItem("links", JSON.stringify(links));
    return links;
  };
  
  export const deleteLink = (index) => {
    const links = getLinks();
    links.splice(index, 1);
    localStorage.setItem("links", JSON.stringify(links));
    return links;
  };
  
  export const updateLink = (index, newUrl, newDescription) => {
    const links = getLinks();
    links[index] = { url: newUrl, description: newDescription };
    localStorage.setItem("links", JSON.stringify(links));
    return links;
  };
  