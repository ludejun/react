export default class Welcome extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>Hello {this.props.name}</div>
    );
  }
}
