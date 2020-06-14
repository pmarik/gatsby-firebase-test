import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import favicon from '../../static/img/favicon.ico';


const SEO = ({ title, description, image, article, lang }) => {
    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)

    const {
      defaultTitle,
      defaultDescription,
      siteUrl,
      defaultImage,
      keywords
    } = site.siteMetadata

    const seo = {
      title: title || defaultTitle,
      description: description || defaultDescription,
      image: `${siteUrl}${image || defaultImage}`,
      url: `${siteUrl}${pathname}`,
      keywords: keywords,
    }

    return (
        <Helmet title={seo.title} htmlAttributes={{lang,}} >
           <link 
              rel="icon"
              href={favicon}
          />

          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />

          <meta name="keywords" content={seo.keywords} />

          {seo.url && <meta property="og:url" content={seo.url} />}

          {(article ? true : null) && <meta property="og:type" content="article" />}

          {seo.title && <meta property="og:title" content={seo.title} />}

          {seo.description && (
            <meta property="og:description" content={seo.description} />
          )}

          {seo.image && <meta property="og:image" content={seo.image} />}

          <meta property="og:type" content="business.business" />

          {/* <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`${withPrefix('/')}img/apple-touch-icon.png`}
                />

                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon-32x32.png`}
                    sizes="32x32"
                />

                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon-16x16.png`}
                    sizes="16x16"
                />

                <link rel="manifest" href={`${withPrefix('/')}assets/site.webmanifest`} />

                <link
                    rel="mask-icon"
                    href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
                    color="#ff4400"
                />

                <meta name="theme-color" content="#fff" />
                <meta name="msapplication-TileColor" content="#00a300"></meta> */}



        </Helmet>
      )
  }
  
export default SEO
  
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  lang: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  lang: `en`,
}

const query = graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl: url
          defaultImage: image,
          keywords
        }
      }
    }
  `