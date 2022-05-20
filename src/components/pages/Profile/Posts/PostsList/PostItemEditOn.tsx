import { FC, useState } from 'react';
import { btnVariant, Button } from "../../../../common/Button/Button"
import { useActions } from '../../../../../hooks/useActions';


interface EditPost{
  id: number
  postText: string
  click: ()=>void
}

export const PostItemEditOn: FC<EditPost> = ({id, postText, click}) => {

  const [inputValue, setInputValue] = useState(postText)
  const {updPostThunk} = useActions()
  const updPost = () => {
    updPostThunk(id, inputValue)
    click()
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} />
      <Button name="Apply" type={btnVariant.blue} click={updPost} />
      <Button name="Cancel" type={btnVariant.blue} click={click} />
    </div>
  )
}
