import React from "react";

const Question = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How dose React Work?
        </div>
        <div className="collapse-content">
          <p>
            It is a component-based, open-source front-end library that is
            exclusively responsible for the application's view layer. It creates
            basic views for each state in the project, and when the data
            changes, React updates and renders the appropriate component
            quickly.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What are the differences between props and state?
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table w-full text-center">
              <thead>
                <tr>
                  <th></th>
                  <th>Props</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>The Data is passed from one component to another.</td>
                  <td>The Data is passed within the component only.</td>
                </tr>

                <tr>
                  <th>2</th>
                  <td>It is Immutable (cannot be modified).</td>
                  <td>It is Mutable ( can be modified).</td>
                </tr>

                <tr>
                  <th>3</th>
                  <td>Props are read-only.</td>
                  <td>State is both read and write.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          what is the purpose of useeffect hook?
        </div>
        <div className="collapse-content">
          <p>
            The useState hook is used for storing variables that are part of
            your application's state and will change as the user interacts with
            your website. The useEffect hook allows components to react to
            lifecycle events such as mounting to the DOM, re-rendering, and
            unmounting
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
