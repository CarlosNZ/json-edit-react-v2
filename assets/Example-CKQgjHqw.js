const n=`import { useState, type CSSProperties } from 'react'
import { JsonEditor, type JsonData } from '@json-edit-react'
import { useConfirmOnUpdate, type ConfirmDialogState } from '@json-edit-react/utils'
import { useExampleProps } from '../../kit/exampleProps' // ---cut---

// \`toast\` is injected as a prop — any function of this shape
// works (the demo passes Chakra's \`useToast()\`).
type Toast = (opts: { title: string; status: 'success' | 'error' }) => void

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const DELAYED = 'Delayed Settlement'
const CONFIRM = 'Name with confirmation'

const initialData = {
  [DELAYED]: "Don't enter the letter 'Z'",
  [CONFIRM]: 'Keanu Reeves',
}

// A plain, self-contained confirmation modal — no UI
// library. It's driven entirely by the \`dialog\` object the
// hook returns: \`isOpen\` toggles it, \`onConfirm\` / \`onCancel\`
// are the button handlers, and \`title\` / \`message\` carry the
// content. Swap in your own modal (Chakra, MUI, Radix…) — the
// only contract is these fields.
const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }: ConfirmDialogState) => {
  if (!isOpen) return null
  return (
    <div style={backdrop} onClick={onCancel}>
      <div style={card} onClick={(e) => e.stopPropagation()}>
        {title && <h2 style={titleStyle}>{title}</h2>}
        {message && <p style={messageStyle}>{message}</p>}
        <div style={actions}>
          <button style={cancelButton} onClick={onCancel}>
            Cancel
          </button>
          <button style={confirmButton} onClick={onConfirm} autoFocus>
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ConfirmAndSettle({ toast }: { toast: Toast }) {
  const [data, setData] = useState<JsonData>(initialData)

  // The CONFIRM field is gated behind a modal by
  // \`useConfirmOnUpdate\`, which runs core's hold() for us (the
  // editor stays open, the tree is blocked while the dialog is
  // up). Its \`onUpdate\` option runs for every other edit, and
  // after a confirmed one settles — so the delayed field's
  // logic lives there.
  const { onUpdate, dialog } = useConfirmOnUpdate({
    confirmOn: (input) => input.key === CONFIRM,
    title: 'Confirm change',
    message: (input) =>
      input.event === 'edit'
        ? \`Set the name to \${JSON.stringify(input.newValue)}?\`
        : 'Apply this change?',
    onUpdate: async (input) => {
      if (input.event !== 'edit' || input.key !== DELAYED) return
      // Optimistic edit that takes 2s to "settle" (no hold).
      // Reject a "Z"; otherwise confirm the save with a toast.
      await wait(2000)
      if (String(input.newValue).toUpperCase().includes('Z'))
        return { error: "Not allowed to use 'Z'" }
      toast({ title: 'Acceptable response', status: 'success' })
    },
  })

  return (
    <>
      <JsonEditor
        data={data}
        setData={setData}
        {...useExampleProps()} // ---cut---
        rootName="form"
        allowAdd={false}
        allowDelete={false}
        onUpdate={onUpdate}
      />
      <ConfirmModal {...dialog} />
    </>
  )
}

const backdrop: CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.45)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
}

const card: CSSProperties = {
  background: '#fff',
  color: '#1a202c',
  borderRadius: 10,
  padding: '1.5em 1.75em',
  width: 'min(90vw, 360px)',
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
}

const titleStyle: CSSProperties = { margin: '0 0 0.4em', fontSize: '1.2em' }
const messageStyle: CSSProperties = { margin: '0 0 1.4em', color: '#4a5568' }
const actions: CSSProperties = { display: 'flex', justifyContent: 'flex-end', gap: '0.75em' }

const buttonBase: CSSProperties = {
  border: 'none',
  borderRadius: 6,
  padding: '0.5em 1.1em',
  fontSize: '0.95em',
  cursor: 'pointer',
}
const cancelButton: CSSProperties = { ...buttonBase, background: '#e2e8f0', color: '#1a202c' }
const confirmButton: CSSProperties = { ...buttonBase, background: '#3182ce', color: '#fff' }
`;export{n as default};
