import { useLocation, useNavigate, useParams } from 'react-router'
import { useArticle } from '../../hooks/articleHooks'
import ArticleContent from '../ArticleContent'
import { ContentModal } from '../genericContent/ContentModal'

const ArticleModal = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()
  const { data, isLoading, error } = useArticle(id!)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading article</div>
  if (isLoading || error || !data) console.log(isLoading, error, data)

  if (!data) return <div>Article not found</div>

  const modalState = {
    backgroundLocation: location.state?.backgroundLocation,
  }

  return (
    <ContentModal onClose={() => navigate('/')}>
      <ArticleContent data={data} modalState={modalState} />
    </ContentModal>
  )
}

export default ArticleModal
