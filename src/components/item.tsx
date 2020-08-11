import React from "react"
import { Item, itemD, ItemCategory } from "../utils/types"
import { Field, FormState, createOnChangeHandler } from "./editableField"
import { create } from "domain"
import { O_NOATIME } from "constants"

interface Props { }

const formState: FormState<Item> = {
  state: itemD(),
  setState: (a) => undefined
}

const onchangeHandler = createOnChangeHandler(formState)

function renderSaveButton(onSaveHandler: (item: Item) => void, item: Item, isEdit: boolean) {
  if (isEdit) {
    return <button onClick={() => onSaveHandler(item)}>Save Changes</button>
  }
  return ""
}


function Item(defaultItem: Item, onSave: (item: Item) => void) {
  let [item, setItem] = React.useState<Item>(defaultItem)
  formState.state = item
  formState.setState = setItem

  const [isEdit, setIsEdit] = React.useState<boolean>(false)

  return (
    <div>
      <div><button onClick={() => setIsEdit(!isEdit)}>Toggle Edit</button></div>
      <Field name="name" id={`name-#{item.id}`} label="Name" onChange={onchangeHandler} editing={isEdit} value={item.name} />
      <Field name="img" id={`img-#{item.id}`} label="Image URL" onChange={onchangeHandler} editing={isEdit} value={item.img || ""} />
      <Field options={[]} name="img" id={`category-#{item.id}`} label="Image URL" onChange={onchangeHandler} editing={isEdit} value={item.img || ""} />
      <Field multi options={[]} name="recipes" id={`recipes-#{item.id}`} label="Recipies" onChange={onchangeHandler} editing={isEdit} value={item.img || ""} />
      {renderSaveButton(onSave, item, isEdit)}
    </div>)
}

export default Item