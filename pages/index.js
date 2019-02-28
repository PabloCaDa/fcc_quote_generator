import Layout from '../comps/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'

// const PostLink = (props) => (
//   <li> 
//     <Link  as={`/p/${props.id}`} href={`post?title=${props.title}`}>
//      <a>{props.title}</a>
//     </Link>
//   </li>
// )




//  export default () => (
//    <Layout>
//      <h1>My Blog</h1>
//      <ul>
//        <PostLink id="hello-nextjs" title='Hello Next.js' />
//        <PostLink id="learn-nextjs" title='Learn Next.js is awesome' />
//        <PostLink id="deploy-nextjs" title='Deploy apps with Zeit' />
//      </ul>
//    </Layout>
//  )

const PostLink = ({show}) =>(
  <li key={show.id}>
    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
      <a>{show.name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

 const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map((show) => (
        // <li key={show.id}>
        //   <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
        //     <a>{show.name}</a>
        //   </Link>
        // </li>
          <PostLink key={show.show.id} show={show.show}/>
        )
      )}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }
    `}</style>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index;