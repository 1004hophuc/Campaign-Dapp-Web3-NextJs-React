import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';


class RequestIndex extends Component {

  static async getInitialProps(props) {

    const { address } = props.query;

    const campaign = Campaign(address);

    const requestCount = await campaign.methods.getRequestsCount().call();

    const approversCount = await campaign.methods.approversCount().call();

    // Từ total of requests dùng js để lấy ra hết phần từ trong mảng requests
    const requests = await Promise.all(
      Array(requestCount)
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );

    // Array(5).fill().map((element, index) => index) là thuật toán của js trả về 1 mảng danh sách các chỉ mục
    // -> (5)[0,1,2,3,4]

    return { address, requests, requestCount, approversCount };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return <RequestRow
        key={index}
        id={index}
        address={this.props.address}
        request={request}
        approversCount={this.props.approversCount}
      />
    });
  }

  render() {

    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h3>Request List</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: '10px' }}>Add Request</Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Appove</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRows()}
          </Body>
        </Table>
        <div>Found {this.props.requestCount} requests.</div>
      </Layout>
    );
  }
}
export default RequestIndex;
