import { useLocation, useNavigate, useParams } from 'react-router'
import { useArticle } from '../../hooks/articleHooks'
import NewsContent from '../NewsContent'
import { ContentModal } from '../genericContent/ContentModal'

const NewsModal = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()
  const { data, isLoading, error } = useArticle(id!)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading article</div>
  if (!data) return <div>Article not found</div>

  const modalState = {
    backgroundLocation: location.state?.backgroundLocation,
  }

  return (
    <ContentModal onClose={() => navigate('/')}>
      <NewsContent data={data} modalState={modalState} />
    </ContentModal>
  )
}

export default NewsModal
