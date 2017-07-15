var Event = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    event_date: React.PropTypes.string,
    place: React.PropTypes.string,
    description: React.PropTypes.string
  },

  render() {
    const {name, event_date, place, description} = this.props
    return(
      <tr>
        <td>{name}</td>
        <td>{event_date}</td>
        <td>{place}</td>
        <td>{description}</td>
      </tr>
    )
  }
})
