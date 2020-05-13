//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBIcon,
  MDBFormInline,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdbreact";

//> CSS
import "./cookie.scss";

class ModalPage extends React.Component {
  state = {
    modal1: localStorage.getItem("cookie") ? false : true,
    essential: true,
    statistics: false,
    marketing: false,
  };

  checkBoxCheck(e) {
    this.setState({ [e.target.name]: e.target.isChecked });
  }

  checkAll() {
    this.setState({ essential: true, statistics: true, marketing: true }, () =>
      this.save()
    );
  }

  save() {
    localStorage.setItem(
      "cookie",
      JSON.stringify({
        essential: this.state.essential ? true : false,
        statistics: this.state.statistics ? true : false,
        marketing: this.state.marketing ? true : false,
      })
    );
    this.setState({ modal1: false }, () => this.props.saveCookie());
  }

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;

    this.setState(
      {
        [modalNumber]: !this.state[modalNumber],
      },
      () => {
        if (!localStorage.getItem("cookie")) {
          localStorage.setItem("cookie", true);
        }
      }
    );
  };

  render() {
    return (
      <MDBModal
        isOpen={this.state.modal1}
        toggle={this.toggle(1)}
        disableFocusTrap={false}
        keyboard={false}
        className="cookie-modal"
      >
        <MDBModalBody className="text-center py-4">
          <h2>Cookie Einstellungen</h2>
          <p className="text-muted">
            Wir verwenden auf unserer Website Cookies, um die Benutzererfahrung
            zu verbessern. Einige davon sind essenziell für den Betrieb der
            Website.
          </p>
          <div className="my-4">
            <MDBInput
              label="Essenziell"
              filled
              checked={this.state.essential}
              disabled
              type="checkbox"
              id="cookieEssenziell"
              containerClass="mr-5"
            />
            <MDBFormInline className="d-flex justify-content-center">
              <MDBInput
                label="Persönliche Ansprache"
                filled
                checked={this.state.marketing}
                name="marketing"
                color="primary"
                type="checkbox"
                id="cookieMarketing"
                containerClass="mr-5"
                onChange={(e) => this.checkBoxCheck(e)}
              />
              <MDBInput
                label="Statistiken"
                filled
                checked={this.state.statistics}
                name="statistics"
                type="checkbox"
                id="cookieStatistiken"
                containerClass="mr-5"
                onChange={(e) => this.checkBoxCheck(e)}
              />
            </MDBFormInline>
          </div>
          <MDBRow className="justify-content-center align-items-center">
            <MDBCol md="6">
              <MDBBtn color="success" onClick={() => this.checkAll()}>
                <MDBIcon icon="check-circle" />
                Alle akzeptieren
              </MDBBtn>
            </MDBCol>
            <MDBCol md="6">
              <MDBBtn color="white" onClick={() => this.save()}>
                Auswahl speichern
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBModalBody>
      </MDBModal>
    );
  }
}

export default ModalPage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
