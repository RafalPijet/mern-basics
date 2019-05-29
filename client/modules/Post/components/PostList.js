import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import PostListItem from './PostListItem/PostListItem';

function PostList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <PostListItem
            post={post}
            key={post.cuid}
            onDelete={() => props.handleDeletePost(post.cuid)}
            onThumbUp={() => props.handleVoteCount(1, post)}
            onThumbDown={() => props.handleVoteCount(-1, post)}
          />
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    voteCount: PropTypes.number.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
  handleVoteCount: PropTypes.func.isRequired,
};

export default PostList;
