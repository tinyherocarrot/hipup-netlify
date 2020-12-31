import React from 'react';
import {
  arrayOf, shape, string, func, bool,
} from 'prop-types';

const propTypes = {
  items: arrayOf(
    shape({
      id: string,
      categoryName: string,
    }),
  ).isRequired,
  currentCategory: string.isRequired,
  changeCategory: func.isRequired,
};

const Categories = ({ items, currentCategory, changeCategory }) => (
  <aside className="categories">
    <ul>
      {items.map(({ id, categoryName }) => (
        <CategoryLink
          key={id}
          categoryName={categoryName}
          isSelected={currentCategory === categoryName}
          changeCategory={changeCategory}
        />
      ))}
    </ul>
    <style jsx>
      {`
        .categories {
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
        ul {
          width: 100%;
          height: 100%;
          text-align: left;
          overflow-y: scroll;
          padding: 0rem 3rem;
          box-sizing: content-box;
        }
      `}
    </style>
  </aside>
);

Categories.propTypes = propTypes;

export default Categories;

const CategoryLink = ({ categoryName, changeCategory, isSelected }) => (
  <>
    <li>
      <span
        role="button"
        tabIndex={0}
        onClick={() => changeCategory(categoryName)}
        onKeyDown={() => changeCategory(categoryName)}
      >
        {categoryName}
      </span>
    </li>
    <style jsx>
      {`
        li {
            list-style: none;
            margin-bottom: 1.2rem;
            cursor: pointer;
        }
        li:hover {
            opacity: 0.6;
        }
        li {
            border-bottom: ${isSelected ? '1px solid black' : ''}
        `}
    </style>
  </>
);

CategoryLink.propTypes = {
  categoryName: string.isRequired,
  changeCategory: func.isRequired,
  isSelected: bool.isRequired,
};
