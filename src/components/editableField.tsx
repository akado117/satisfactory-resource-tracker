import React, { ChangeEvent } from "react"

interface Props {
  label: string,
  id: string,
  value: string | number,
  editing: Boolean,
  name: string,
  type?: string,
  multi?: boolean,
  options?: Array<InputOptions>
  onChange(e: ChangeEvent): void
}

interface InputOptions {
  name: string,
  value: string | number,
  selected?: boolean,
  disabled?: boolean
}

export interface FormState<T> {
  state: T,
  setState(type: T): void
}

export function createOnChangeHandler<T>({ state, setState }: FormState<T>) {

  return function updateFormField(e: React.ChangeEvent<HTMLInputElement>) {
    setState({ ...state, [e.target.name]: e.target.value })
  }
}


export function Field({ id, name, editing, label, value, type, onChange }: Props) {

  let content
  if (editing) {
    content = (
      <p>{label}: {value}</p>
    )
  } else {
    content = (
      <React.Fragment>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} type={type || "text"} value={value} onChange={onChange} />
      </React.Fragment>
    )
  }



  return (
    <div className="form_field">
      {content}
    </div>)
}

export default Field