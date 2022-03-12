import { Component } from 'react'
import HomePageBanner from '../components/Banners/HomepageBanner'
import Layout from '../components/Layout'
import PropertyListing from '../components/PropertyListing'

class Home extends Component {
  state = { }


  componentDidMount(){
  }

  render(){
    return (
      <Layout>
        <HomePageBanner />
        <PropertyListing />
      </Layout>
     )
  }
}


export async function getServerSideProps(ctx) {
  const { query, req, res } = ctx
  return {
    props: {
      currentUrl:req.url
    },
}
}
export default Home
