import closeIcon from '../../assets/icons/close-icon.svg'

export const ContentModal = ({
  children,
  onClose,
}: {
  children: React.ReactNode
  onClose: () => void
}) => {
  return (
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} title="Close" />
      <div className="flex items-center justify-center min-h-full p-4">
        <div className="w-full max-w-3xl rounded-xl bg-white overflow-hidden relative">
          <div className="p-6 overflow-y-auto md:p-14 max-md:h-[70vh] md:aspect-[4/3]">
            {children}
            <button
              className="bg-surface-yellow rounded-full absolute top-0 right-0 flex justify-center w-10 h-10 mt-5 mr-5"
              onClick={onClose}
              title="Close"
            >
              <img src={closeIcon} className="w-6" alt="Close" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
