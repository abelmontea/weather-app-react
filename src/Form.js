export default function Form() {
  return (
    <form id="search-form">
      <div id="search-engine" className="row justify-content-evenly">
        <div className="col">
          <input
            type="text"
            placeholder="Look up any city!"
            className="search-city form-control"
          />
        </div>
        <div className="col-md-auto">
          <input
            type="submit"
            value="Search"
            className="search-button btn btn-success"
          />
        </div>
        <div className="col-md-auto">
          <button className="use-current-location btn btn-primary">
            Current Location
          </button>
        </div>
      </div>
    </form>
  );
}
