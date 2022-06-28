import React, {Component} from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3.js';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {

  onApprove = async () => {
    const {address, id} = this.props;
    // address của campaign mà chúng ta đang triển khai
    // id là của request mà chúng ta muốn approval

    const campaign = Campaign(address);
    const accounts = await web3.eth.getAccounts();

    await campaign.methods.approveRequest(id).send({
      from: accounts[0]
    });
  };

  onFinalize = async () => {
    const {address, id} = this.props;
    // address của campaign mà chúng ta đang triển khai
    // id là của request mà chúng ta muốn Finalize

    const campaign = Campaign(address);
    const accounts = await web3.eth.getAccounts();

    await campaign.methods.finalizeRequest(id).send({
      from: accounts[0]
    });
  };

  render() {

    const {Row, Cell} = Table;

    const {request, id, approversCount} = this.props;

    const readyToFinalize = request.approvalCount > approversCount / 2;
    // sẵn sàng để finalize

    // value của mỗi request mà chúng ta muốn tạo

    return (
      <Row disabled={request.complete} positive={readyToFinalize && !request.complete} >
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approvalCount}/{approversCount}
        </Cell>
        <Cell>
          { request.complete ? null : (
            <Button color="green" basic onClick={this.onApprove} >Aprrove</Button>
          )}
        </Cell>
        <Cell>
            { request.complete ? null : (
                <Button color="teal" basic onClick={this.onFinalize} >Finalize</Button>
            )}
        </Cell>
      </Row>
    )
  };
}

export default RequestRow;
