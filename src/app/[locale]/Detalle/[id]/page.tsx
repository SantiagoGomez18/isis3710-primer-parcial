
import { type FC } from 'react'
import Detalle from '../../components/Detalle/page'

type Props = { params: { id: string } }

const Page: FC<Props> = ({ params }) => {
  return <Detalle id={params.id} />
}

export default Page
