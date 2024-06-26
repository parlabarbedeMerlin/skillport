import Portfolio from "@/components/Portfolio"
import axios from "axios"

export const getServerSideProps = async ({ params: { username } }) => {
  const { folio } = await axios(`${process.env.HOST_NAME}/api/folio/${username}`).then((res) => res.data)

  return { props: { folio } }
}
const Folio = ({ folio }) => (
  <Portfolio lstComponent={folio} />
)

export default Folio