import Layout from './Layout'
import Home from './pages/Home'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
      <Toaster position="top-right" />
    </>
  )
}

export default App