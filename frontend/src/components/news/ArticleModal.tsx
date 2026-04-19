import { useLocation, useNavigate, useParams } from 'react-router'
import closeIcon from '../../assets/icons/close-icon.svg'
import { useArticle } from '../../hooks/articleHooks'
import ArticleContent from '../ArticleContent'

const ArticleModal = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()

  const { data, isLoading, error } = useArticle(id!)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading article</div>
  if (isLoading || error || !data) console.log(isLoading, error, data)

  if (!data) return <div>Article not found</div>

  const handleClose = () => {
    navigate('/')
  }

  const modalState = {
    backgroundLocation: location.state?.backgroundLocation,
  }

  return (
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={handleClose}
        title="Close"
      />

      <div className="flex items-center justify-center min-h-full p-4">
        <div className="w-full max-w-3xl rounded-xl bg-white duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 overflow-hidden relative">
          <div className="p-6 overflow-y-auto md:p-14 max-md:h-[70vh] md:aspect-[4/3]">
            <ArticleContent data={data} modalState={modalState} />

            <button
              className="absolute top-0 right-0 flex justify-center w-10 h-10 mt-5 mr-5"
              onClick={handleClose}
              title="Close"
            >
              <img src={closeIcon} className="w-6" alt="Vite logo" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleModal
