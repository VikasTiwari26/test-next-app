import { Component } from 'react'
import { getApiData } from '../api/api'
import HomePageBanner from '../components/Banners/HomepageBanner'
import Layout from '../components/Layout'
import PropertyListing from '../components/PropertyListing'
import AxiosRequest from '../providers/axios'
import { propertiesList } from '../utils/sampleData'

const axios = new AxiosRequest().getClient();

class Home extends Component {
  state = {
    properties:[]
   }


  componentDidMount(){
    this.getProperties()
  }

  getProperties =async()=>{
    this.setState({ loading: true })
    let { url } = getApiData('getProperties')
    try {
        const response = await axios.get(url, {
            data: null
        })
        if (response.status == 200) {
            this.setState({ properties: response.data.properties })
        }
    } catch (err) {
        console.log(err)
        this.setState({properties:propertiesList})
    } finally {
        this.setState({ loading: false })
    }
}

  render(){
    const { properties } = this.state
    return (
      <Layout>
        <HomePageBanner />
        <PropertyListing properties={properties} />
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
