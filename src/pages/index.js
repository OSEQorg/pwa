import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from 'gatsby'

import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/index.css';
import { node } from "prop-types"

export default function IndexPage({ data }) {
  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <h2>Select Your Language</h2>
      <p>Welcome to the world's most vital audiobook.</p>

      <Table striped bordered hover>
        <tbody>
          {data.audiopedia.allLanguages.map(({ id, name }) => (
            <tr key={id}>
              <td><Link to={"/" + name}>{name}</Link></td>
            </tr>
          ))} 
        </tbody>
      </Table>
      
    </Layout>
  );
}

export const query = graphql`
  query LanguageQuery {
    audiopedia {
      allLanguages{
        id
        name
        audioUrl
        published
      }
    }
  }
`