import React, { Component } from "react"
import shortid from "shortid"
import PropTypes from "prop-types"
import style from "../ContactForm/ContactForm.module.css"

export default class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    htmlFor: PropTypes.shape({
      nameId: PropTypes.string.isRequired,
      numberId: PropTypes.string.isRequired,
    }).isRequired,
  }

  state = {
    name: "",
    number: "",
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { onSubmit } = this.props
    const { name, number } = this.state
    onSubmit({ id: shortid.generate(), name, number })
    this.setState({ name: "", number: "" })
  }

  btnClasses() {
    const classes = [style.button]
    if (this.state.name && typeof +this.state.number === "number") {
      classes.push(style.disabled)
    }
    return classes.join(" ")
  }

  render() {
    const { htmlFor } = this.props
    const { nameId, numberId } = htmlFor
    const { name, number } = this.state
    const verificationLength = name.length === 0 || number.length === 0
    const verificationNumber = Number.isNaN(Number(number)) || number === null
    const submitVerification = verificationLength || verificationNumber
    return (
      <>
        <form onSubmit={this.handleSubmit} className={style.form__contact}>
          <label htmlFor={nameId} className={style["form__name-title"]}>
            Name
            <input
              className={style["form__name-input"]}
              onChange={this.handleChange}
              value={name}
              name="name"
              type="text"
              placeholder="Input name"
            />
          </label>
          <label htmlFor={numberId} className={style["form__name-title"]}>
            Number
            <input
              className={style["form__name-input"]}
              onChange={this.handleChange}
              value={number}
              name="number"
              type="tel"
              placeholder="Input phone"
            />
          </label>
          <button
            disabled={submitVerification}
            type="submit"
            className={this.btnClasses()}
          >
            Add contact
          </button>
        </form>
      </>
    )
  }
}
