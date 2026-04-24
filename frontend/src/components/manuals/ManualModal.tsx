import { useNavigate, useParams } from 'react-router'
import { ContentModal } from '../genericContent/ContentModal'
import { useOneManual } from '../../hooks/manualHooks'
import ManualContent from './ManualContent'

const ManualModal = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  if (!id) return <div>Manual not found</div>

  const { data, isLoading, error } = useOneManual(Number(id))

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading article</div>
  if (isLoading || error || !data) console.log(isLoading, error, data)

  if (!data) return <div>Article not found</div>

  return (
    <ContentModal onClose={() => navigate('/')}>
      <ManualContent data={data} />
    </ContentModal>
  )
}

export default ManualModal
