var EventTable = React.createClass({
  render() {
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3">Name</th>
            <th className="col-md-2">Date</th>
            <th className="col-md-3">Place</th>
            <th className="col-md-4">Description</th>
          </tr>
        </thead>
        <tbody>
          <Event
            name="ss"
            event_date="12.31.2003"
            place="Dom"
            description="This is mt test"
          />
        </tbody>
      </table>
    )
  }
});
