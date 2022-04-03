import React, { Component } from 'react';
import { getApiData } from '../api/api';
import PropertiesBannner from '../components/Banners/PropertiesBanner';
import Layout from '../components/Layout';
import PropertyListing from '../components/PropertyListing';
import AxiosRequest from '../providers/axios';
import { propertiesList } from '../utils/sampleData';
// import dynamic from "next/dynamic"
// const NextImage = dynamic(() => import("next/image"))

const axios = new AxiosRequest().getClient();

class Properties extends Component {
    state = {
        properties: []
    }

    componentDidMount() {
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

    render() {
        const { properties } = this.state
        return (
            <Layout>
                <PropertiesBannner />
                <PropertyListing properties={properties} />
            </Layout>
        );
    }
}

export default Properties;