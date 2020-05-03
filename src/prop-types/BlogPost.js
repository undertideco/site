import PropTypes from 'prop-types';

const BlogPost = PropTypes.shape({
  id: PropTypes.string,
  body: PropTypes.func,
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.shape({
      fluid: PropTypes.shape(),
    }),
  }),
});

export default BlogPost;
