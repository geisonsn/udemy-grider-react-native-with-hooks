import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={["Sharing data with child component"]}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;