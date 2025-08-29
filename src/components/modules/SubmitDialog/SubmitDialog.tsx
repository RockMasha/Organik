import { Backdrop } from '@/components/ui/Backdrop'
import { ActionBtnBox, Modal } from './SubmitDialog.styled'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/Title'

interface SubmitDialogProps {
  questionText: string
  submitDialog: () => void
  rejectDialog: () => void
  submitLoading: boolean
}

function SubmitDialog({
  questionText,
  submitDialog,
  rejectDialog,
  submitLoading,
}: SubmitDialogProps) {
  return (
    <Backdrop>
      <Modal>
        <Title type="h2">{questionText}</Title>
        <ActionBtnBox>
          <Button variant="blue" onClick={submitDialog} loader={submitLoading}>
            Yes
          </Button>
          <Button variant="transparent" onClick={rejectDialog}>
            No
          </Button>
        </ActionBtnBox>
      </Modal>
    </Backdrop>
  )
}

export default SubmitDialog
