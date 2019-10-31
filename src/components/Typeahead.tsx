import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Downshift from "downshift";
import { IRepository } from '../types';
import { ApplicationState } from '../store';
import * as RepositoriesActions from '../actions/typeaheadActions';

interface StateProps {
  repositories: IRepository[]
}

interface DispatchProps {
  loadRequest(query: string): void
}

type Props = StateProps & DispatchProps

class Typeahead extends Component<Props> {
  render() {
    const fetchCountries = (query: string) => {
      this.props.loadRequest(query)
    }

    const inputOnChange = (e: React.FormEvent<HTMLInputElement>) => {
      if (!e.currentTarget.value) {
        return
      }
      fetchCountries(e.currentTarget.value)
    }

    return (
      <div>
        <Downshift
          onChange={selectedItem => console.log(selectedItem)}
          itemToString={selectedItem => (selectedItem ? selectedItem.name : "")}
        >
          {({
            getInputProps,
            getItemProps,
            highlightedIndex,
            isOpen,
            inputValue,
            getLabelProps
          }) => (
              <div>
                <label {...getLabelProps()}
                  style={{
                    display: "block",
                    color: "#ff69b4"
                  }}>
                  Search for your country
                </label>
                <br />
                <input
                  {...getInputProps({
                    placeholder: "Start typing...",
                    onChange: inputOnChange
                  })}
                  style={{
                    width: "100%",
                    padding: "1em",
                    color: "#ff69b4",
                    background: "#ffefd5",
                    border: "none",
                    borderRadius: "3px",
                    fontSize: "medium"
                  }}
                />
                {isOpen &&
                  this.props.repositories
                    .filter(
                      item => !inputValue || item.name
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    )
                    .slice(0, 10)
                    .map((item, index) => (
                      <div
                        {...getItemProps({
                          key: item.code,
                          item,
                          index
                        })}
                        style={{
                          color: highlightedIndex === index ? "#09d3ac" : "#bbbfc7",
                          cursor: "pointer"
                        }}
                      >
                        {item.name}
                      </div>
                    ))}

              </div>
            )}
        </Downshift>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Typeahead);
