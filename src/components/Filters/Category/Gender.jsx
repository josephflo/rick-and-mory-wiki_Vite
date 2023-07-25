import React from 'react'

const Gender = () => {
  return (
    <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Gender
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              asdasdasd
            </div>
          </div>
        </div>
  )
}

export default Gender
