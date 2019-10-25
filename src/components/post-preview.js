import React from "react"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"
import { Highlight } from 'react-instantsearch-dom'

const PostPreview = ({ hit }) => {
  {/*const title = hit.title || hit.slug*/}
    return (
  <article>
    <header>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none` }} to={ hit.slug }>
          <Highlight
            hit={hit}
            attribute="title"
            tagName="mark"
          />
        </Link>
      </h3>
      <small>{new Date(hit.date) . toLocaleDateString()}</small>
    </header>
    <section>
      {/* <p
        dangerouslySetInnerHTML={{
          __html: hit.frontmatter.description || hit.excerpt,
        }}
      /> */}
      <p>
        <Highlight
          hit={hit}
          attribute="excerpt"
          tagName="mark"
        />
      </p>
    </section>
  </article>
    )
}

export default PostPreview