import React, {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class ContributeForm extends Component {

  state = {
    value: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);

    this.setState({loading: true});

    try{
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });

      Router.replaceRoute(`/campaign/${this.props.address}`)
    } catch(err) {
      this.setState({errorMessage: err.message})
    }

    this.setState({loading: false, value:''});

  };

  // Đầu tiên người chơi sẽ xem những chiến dịch được kêu gọi, nếu thấy ổn thì họ sẽ tiến đến contribute cho chiến dịch đó
  // Để tiền đến được chiến dịch đó thì phải biết account của  người tạo ra chiến dịch, từ account này lấy address và interface
  // để tạo ra 1 instance của chiến dịch, và từ đó chấm đến các methods trong chiến dịch để contribute

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            label="ether"
            labelPosition="right"
            value={this.state.value}
            onChange={(e) => {this.setState({value: e.target.value})}}
          / >
        </Form.Field>
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading} >
          Contribute
        </Button>
      </Form>
    )
  }
}

export default ContributeForm;
