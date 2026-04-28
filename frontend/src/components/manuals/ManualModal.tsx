import { useNavigate, useParams } from 'react-router'
import { ContentModal } from '../genericContent/ContentModal'
import { useManual } from '../../hooks/manualHooks'
import ManualContent from './ManualContent'

const ManualModal = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isLoading, error } = useManual(id!)

  if (!id) return <div>Manual not found</div>

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading manual</div>
  if (isLoading || error || !data) console.log(isLoading, error, data)

  if (!data) return <div>Manual not found</div>

  return (
    <ContentModal onClose={() => navigate('/butiksservice')}>
      <ManualContent data={data} />
    </ContentModal>
  )
}

export default ManualModal
