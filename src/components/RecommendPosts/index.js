import React from "react"
import propTypes from "prop-types"

import * as S from "./styled"

const RecommendPosts = ({ next, previous }) => (
  <S.RecommendWrapper>
    {previous && (
      <S.RecommendedLink to={previous.fields.slug} className="previous">
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink to={next.fields.slug} className="next">
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendWrapper>
)

RecommendPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      frontmatter: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendPosts
